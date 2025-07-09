ARG NODE_VERSION
ARG PNPM_VERSION

FROM node:${NODE_VERSION}-slim AS dependencies
WORKDIR /app

RUN npm install -g pnpm@${PNPM_VERSION}

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

FROM node:${NODE_VERSION}-slim
WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY ./dist .

# TODO: use env PORT
EXPOSE 3000
CMD ["node", "./index.ts"]
