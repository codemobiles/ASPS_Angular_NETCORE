FROM node:12.8-alpine AS builder
WORKDIR /usr/src/app
COPY . .
RUN yarn && yarn build --prod

FROM nginx:stable-alpine
COPY src/nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/src/app/dist/mypos/ .
