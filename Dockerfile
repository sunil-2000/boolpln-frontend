FROM node:alpine
WORKDIR "/frontend"

COPY ./package.json /frontend
RUN npm install

COPY . .
CMD ["npm", "start"]