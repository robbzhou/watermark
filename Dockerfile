FROM node:14.21.3-buster-slim AS build

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

FROM nginx:1.25.4-alpine3.18 as prod

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


