FROM node:16.15-alpine as base

WORKDIR /home/node/app

COPY package.json ./

RUN npm i

# this will copy the root project files into the container on the workdir above /home/node/app
COPY . .

FROM base as production

ENV NODE_PATH=./build

RUN npm run build