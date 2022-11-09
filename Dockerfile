FROM node

RUN apt-get update     && apt-get install -y     && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . .

RUN npm install

RUN npm ci --only=production

EXPOSE 3000

CMD [ "node", "index.js" ]