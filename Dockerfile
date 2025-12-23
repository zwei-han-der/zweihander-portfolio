FROM oven/bun:1

WORKDIR /app

# Copy project
COPY . .

# Install deps and build frontend
RUN bun install
RUN bun run build

ENV NODE_ENV=production

EXPOSE 3000

CMD ["bun", "run", "preview"]
