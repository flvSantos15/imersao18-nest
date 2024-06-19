FROM node:21-slim

# Parei em 2:01:15

# openssl é dependia do prisma
RUN apt update && apt install -y openssl procps

RUN npm install -g @nestjs/cli@10.3.2

WORKDIR /home/node/app

USER node

CMD tail -f /dev/null