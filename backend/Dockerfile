FROM node:20-alpine AS base
WORKDIR /app

COPY package.json pnpm-lock.yaml* package-lock.json* yarn.lock* ./

RUN if [ -f pnpm-lock.yaml ]; then npm i -g pnpm && pnpm i --frozen-lockfile; \
    elif [ -f yarn.lock ]; then corepack enable && yarn install --frozen-lockfile; \
    else npm ci; fi

COPY . .

RUN npm run build || (echo "Build failed" && exit 1)

EXPOSE 4000

CMD ["npm", "run", "start"]


