FROM node:18 AS build

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm 
RUN pnpm install

COPY . .
RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "run", "start"]
