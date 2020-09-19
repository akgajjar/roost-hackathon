# pull official base image
FROM node:12-alpine
LABEL maintainer="Ige Adetokunbo Temitayo" \
    vendor="Zettabytes" \
    owner="zbio" \
    event="Roost Hackathon 2020"

# Making working directory
RUN mkdir -p /home/node/app

# set working directory
WORKDIR /home/node/app

# copy package.json dependencies
COPY package.json /home/node/app/

# install app dependencies
RUN cd /home/node/app && npm install --only=production  && npm install nodemon

# add app to working directory
COPY . /home/node/app

# Expose application port
EXPOSE 3001

# start app
CMD ["npm", "start"]