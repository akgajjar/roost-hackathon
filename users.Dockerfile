FROM node:12-alpine

RUN mkdir -p /home/node/app/usersAPI

WORKDIR /home/node/app/usersAPI

COPY usersAPI/package.json /home/node/app/usersAPI/

RUN cd /home/node/app/usersAPI && npm install --only=production  && npm install nodemon

COPY . /home/node/app

EXPOSE 3000

CMD ["npm", "start"]