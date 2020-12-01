FROM node:12
RUN npm install -gf yarn
WORKDIR /usr/src/app
COPY . .
RUN yarn install
RUN yarn build
EXPOSE 3000
# 실행 명령
CMD [ "yarn", "start" ]