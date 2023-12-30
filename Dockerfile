FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV DEBUG_KEYBOARD=true
ENV NODE_ENV=development

EXPOSE 3000
CMD [ "npm", "start" ]