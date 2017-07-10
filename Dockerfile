FROM node:8.1-alpine

RUN mkdir -p /home/app
ENV HOME /home/app
WORKDIR $HOME

ADD . $HOME

RUN yarn install

EXPOSE 3000

CMD [ "yarn", "start" ]
