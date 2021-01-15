FROM node:lts-alpine

RUN mkdir -p /backend

WORKDIR /backend

COPY package*.json ./

COPY . ./

RUN npm install

EXPOSE 2000

CMD [ "node", "index.js" ]
