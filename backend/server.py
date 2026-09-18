from fastapi import FastAPI, APIRouter, HTTPException, Query
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, field_validator
from typing import List, Optional
import uuid
import re
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

SERVICES = [
    "Signature Hair Cut & Styling",
    "Architectural Precision Cut",
    "Master Balayage",
    "Global Hair Colour",
    "Regenerative Hair Spa",
    "Royal Head Massage",
    "Luxury Hot-Towel Shave",
    "Beard Sculpt & Detail",
    "Classic Facial Ritual",
]
STYLISTS = ["Any Artist", "Raju", "Asif"]


class BookingCreate(BaseModel):
    name: str = Field(min_length=2, max_length=80)
    phone: str
    service: str
    stylist: str = "Any Artist"
    date: str
    time: str
    notes: Optional[str] = Field(default="", max_length=500)

    @field_validator("phone")
    @classmethod
    def valid_phone(cls, v: str) -> str:
        digits = re.sub(r"\D", "", v)
        if len(digits) < 10:
            raise ValueError("Enter a valid phone number")
        return v.strip()

    @field_validator("service")
    @classmethod
    def valid_service(cls, v: str) -> str:
        if v not in SERVICES:
            raise ValueError("Unknown service")
        return v


class Booking(BookingCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    status: str = "requested"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


@api_router.get("/")
async def root():
    return {"message": "#ONE SALON API"}


@api_router.get("/services")
async def list_services():
    return {"services": SERVICES, "stylists": STYLISTS}


@api_router.post("/bookings", response_model=Booking)
async def create_booking(payload: BookingCreate):
    booking = Booking(**payload.model_dump())
    doc = booking.model_dump()
    await db.bookings.insert_one(doc)
    doc.pop("_id", None)
    return booking


@api_router.get("/bookings", response_model=List[Booking])
async def list_bookings(key: str = Query(default="")):
    admin_key = os.environ.get("ADMIN_KEY")
    if not admin_key or key != admin_key:
        raise HTTPException(status_code=403, detail="Forbidden")
    docs = await db.bookings.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    return docs


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
