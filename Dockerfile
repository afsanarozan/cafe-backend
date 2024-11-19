FROM node:14.17.6-alpine3.11

RUN mkdir -p /backend

WORKDIR /backend

COPY package*.json ./

COPY . ./

RUN npm install

EXPOSE 2000

CMD [ "node", "index.js" ]
