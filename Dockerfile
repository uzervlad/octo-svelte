FROM oven/bun:1 AS base
WORKDIR /usr/app

COPY build /usr/app
EXPOSE 3131/tcp

ENV PORT=3131

ENTRYPOINT [ "bun", "run", "index.js" ]
