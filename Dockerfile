FROM node:lts-alpine

RUN mkdir -p /usr/sampleapp

WORKDIR /usr/sampleapp

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 2000

CMD [ "node", "index.js" ]
