FROM oven/bun:1.2.20-alpine AS builder
WORKDIR /app

COPY . /app/

RUN bun i
RUN bun run build

FROM oven/bun:1.2.20-alpine

WORKDIR /app

COPY --from=builder /app/build /app
EXPOSE 3000

ENTRYPOINT [ "bun", "run", "index.js" ]
