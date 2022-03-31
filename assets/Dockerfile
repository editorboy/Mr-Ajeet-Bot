FROM ajeet-akshata/Mr-Ajeet-Bot:public

RUN git clone https://github.com/ajeet-akshata/Mr-Ajeet-Bot /root/Mr-Ajeet-Bot
WORKDIR /root/Mr-Ajeet-Bot/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "assets/module.js"]
