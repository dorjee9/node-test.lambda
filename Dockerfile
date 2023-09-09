FROM public.ecr.aws/lambda/nodejs:14

COPY app.js package*.json /var/task/

RUN npm install

EXPOSE 3000

CMD ["node","app.js"]
//aws ecr get-login-password --region us-east-2 | docker login --username stephane --password-stdin 281577371166.dkr.ecr.us-east-2.amazonaws.com