FROM node:19-alpine3.17

WORKDIR /home/app

COPY package.json .

RUN npm i

COPY . .

CMD ["npm", "start"]