FROM nginx:1.23.1

COPY nginx.conf /etc/nginx/nginx.conf

##linux nneeds these
WORKDIR /nginx
COPY ./build build
## add permissions for nginx user
RUN chown -R nginx:nginx /nginx && chmod -R 755 /nginx && chmod -R 755 /nginx/build && \
        chown -R nginx:nginx /var/cache/nginx && \
        chown -R nginx:nginx /var/log/nginx && \
        chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid



EXPOSE 80 443