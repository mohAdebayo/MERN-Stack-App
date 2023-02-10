FROM node:13.12.0-alpine as build

WORKDIR /app

COPY package.json /app

COPY yarn.lock /app

RUN yarn add jsonwebtoken

RUN yarn install

COPY . .

RUN yarn run build

FROM nginx:stable-alpine

COPY --from=build /app /usr/share/nginx/html
COPY --from=build /app/build /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf