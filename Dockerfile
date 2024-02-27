FROM node:14.14-buster-slim

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 8000

CMD [ "yarn", "start" ]
