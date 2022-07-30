FROM node:8.12.0-alpine

WORKDIR /app

COPY package.json /app

COPY yarn.lock /app

RUN yarn install

COPY . .

EXPOSE 5000

CMD ["nodemon", "app.js"]

