ARG NODE_VERSION

FROM node:${NODE_VERSION}-slim
WORKDIR /app

COPY ./.output .

CMD ["node", "./server/index.mjs"]
