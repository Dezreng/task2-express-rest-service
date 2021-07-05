FROM node:14.17-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npx tsc
CMD ["node", "./build/server.js"]