FROM node:8.12.0-alpine

WORKDIR /app

COPY package.json /app

COPY yarn.lock /app

RUN yarn add jsonwebtoken

RUN yarn install

COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=build /app /usr/share/nginx/html
COPY --from=build /app/build /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf