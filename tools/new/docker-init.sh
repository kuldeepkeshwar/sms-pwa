#!/usr/bin/env bash
npm i -g preact-cli nodemon
npm i


# installing caddy
# apt-get update && apt-get -y upgrade
apt-get install curl
chmod 0770 ./tools/new/install-caddy.sh
./tools/new/install-caddy.sh
setcap cap_net_bind_service=+ep /usr/local/bin/caddy
mkdir /etc/caddy
chown -R root:www-data /etc/caddy
mkdir /etc/ssl/caddy
chown -R www-data:root /etc/ssl/caddy
chmod 0770 /etc/ssl/caddy
touch /etc/caddy/Caddyfile
mkdir /var/www
chown www-data: /var/www


## grant permission for entry
chmod 0770 ./tools/new/docker-entry.sh
