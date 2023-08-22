FROM node:18 AS build

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm 
RUN pnpm install

COPY . .
RUN pnpm run build

EXPOSE 80

ENTRYPOINT ["pnpm", "run", "start", "-p", "80"]
