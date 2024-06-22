FROM node:20.14.0-alpine3.20

RUN mkdir -p /backend

WORKDIR /backend

COPY package*.json ./

COPY . ./

RUN npm install

EXPOSE 2000

CMD [ "node", "index.js" ]
