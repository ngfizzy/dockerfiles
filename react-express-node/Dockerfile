FROM node:12.20-alpine
LABEL author="Olufisayo Bamidele"

WORKDIR /var/www
COPY . .
ENV NODE_ENV=production
RUN cd react-frontend && npm install || true && npm run build

FROM node:12.20-alpine
WORKDIR /var/www
COPY --from=0 /var/www /var/www

# Added due to  to bcrypt error
RUN cd express-backend && npm install || true 


WORKDIR /var/www/express-backend


EXPOSE 8080

CMD [ "npm", "start" ]
