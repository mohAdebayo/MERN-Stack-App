FROM node:13.12.0-alpine as build

WORKDIR /app

COPY package.json /app

COPY yarn.lock /app

RUN yarn add jsonwebtoken

RUN yarn install

COPY . .

EXPOSE 3000

CMD yarn start