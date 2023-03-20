FROM node:8.12.0-alpine

WORKDIR /app

COPY package.json /app

COPY yarn.lock /app

RUN yarn install

COPY . .

#RUN cd client && yarn install && yarn build

EXPOSE 5000

CMD yarn server

