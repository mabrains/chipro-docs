FROM node:20-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-alpine AS runner

RUN addgroup -S app && adduser -S -G app app

WORKDIR /app

RUN npm install -g serve

COPY --chown=app:app --from=builder /app/build ./build

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000

EXPOSE 3000

USER app

CMD ["serve", "-s", "build", "-l", "3000"]
