FROM node:14.21.3-buster-slim

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 8000

CMD [ "yarn", "start" ]
