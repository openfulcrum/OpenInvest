FROM node:11
RUN git clone https://github.com/openfulcrum/OpenInvest.git
WORKDIR OpenInvest
RUN   sed -i 's|\\"||g' package.json
RUN npm install
CMD npm start
EXPOSE 8080
