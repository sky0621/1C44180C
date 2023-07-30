FROM node:18-alpine AS base

# Install dependencies and build the source code
FROM base AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN \
  if [ -f package-lock.json ]; then npm ci; \
  else echo "Lockfile not found." && exit 1; \
  fi
COPY . .
COPY ./src src
COPY .env .
COPY ./prisma prisma
RUN npx prisma generate
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN \
  addgroup --system --gid 1001 nodejs; \
  adduser --system --uid 1001 nextjs

COPY --from=builder --link /app/public ./public
COPY --from=builder --link --chown=1001:1001 /app/.next/standalone ./
COPY --from=builder --link --chown=1001:1001 /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME localhost

CMD ["node", "server.js"]
