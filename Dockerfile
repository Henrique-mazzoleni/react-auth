FROM node:lts-alpine3.16
WORKDIR /usr/src/app

COPY pack*.json ./
RUN npm ci && mv node_modules/ ../
COPY . .

CMD ["npm", "start"]