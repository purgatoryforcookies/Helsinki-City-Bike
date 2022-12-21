FROM nginx:1.23.1

COPY nginx.conf /etc/nginx/nginx.conf
COPY ./build /usr/share/nginx/html/build

##linux nneeds these
WORKDIR /nginx
## add permissions for nginx user
RUN chown -R nginx:nginx /nginx && chmod -R 755 /nginx && \
        chown -R nginx:nginx /var/cache/nginx && \
        chown -R nginx:nginx /var/log/nginx && \
        chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid



EXPOSE 80 443