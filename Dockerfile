FROM mhart/alpine-node:10

WORKDIR /app

COPY . .

EXPOSE 3000

RUN npm i

CMD npm start
