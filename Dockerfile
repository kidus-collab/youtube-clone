FROM node:16-alpine 

WORKDIR /youtubeclone 

COPY  . . 

EXPOSE 3000 

CMD [ "yarn" , "start" ]