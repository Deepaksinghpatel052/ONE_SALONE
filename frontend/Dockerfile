# ---- Build stage ----
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 600000

COPY . .

# Baked into the JS bundle at build time. Empty = same origin, so the
# browser calls /api on the nginx container, which proxies to the backend.
ARG REACT_APP_BACKEND_URL=""
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL \
    GENERATE_SOURCEMAP=false

RUN yarn build

# ---- Runtime stage ----
FROM nginx:1.27-alpine

# The nginx image renders templates/*.template with env vars (e.g. BACKEND_PORT)
# into /etc/nginx/conf.d/ at container start.
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
