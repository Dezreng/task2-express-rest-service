FROM node:16-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npx tsc
CMD ["node", "./build/server.js"]