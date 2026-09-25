FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements-docker.txt .
RUN pip install --no-cache-dir -r requirements-docker.txt

COPY server.py .

RUN useradd --create-home --uid 1000 appuser
USER appuser

ENV PORT=8001
EXPOSE 8001

# PORT is set from BACKEND_PORT in docker-compose.yml
CMD ["sh", "-c", "exec uvicorn server:app --host 0.0.0.0 --port ${PORT}"]
