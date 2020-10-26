FROM node:12-alpine

WORKDIR /home/app

COPY ./src ./src
COPY ./.env ./.env
COPY ./public ./public
COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock
COPY ./tsconfig.json ./tsconfig.json
RUN yarn

RUN yarn build

EXPOSE 4040
EXPOSE 6060

CMD ["yarn", "start"]