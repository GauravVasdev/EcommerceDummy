FROM node:16 as build

WORKDIR /app

COPY package.json .
COPY . .

RUN npm install --force
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]