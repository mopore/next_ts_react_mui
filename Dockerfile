FROM node:18 AS build

WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install -g pnpm 
RUN pnpm install

COPY . .
RUN pnpm run build

# Serve the Next.js app using Nginx
FROM nginx:alpine

# Copy over the built app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Use a custom Nginx configuration
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
