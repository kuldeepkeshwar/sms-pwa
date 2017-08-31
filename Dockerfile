FROM node:6.4
# RUN apt-get update
WORKDIR /app
COPY ./ ./

RUN chmod 0770 ./tools/new/docker-init.sh
RUN ./tools/new/docker-init.sh
EXPOSE 443

ENTRYPOINT ./tools/new/docker-entry.sh

