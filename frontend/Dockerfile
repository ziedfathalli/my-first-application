FROM node:16-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
EXPOSE 3000
