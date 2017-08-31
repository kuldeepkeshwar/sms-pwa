#!/usr/bin/env bash
npm run build
node build/api/index.js & echo "api server running !!!"
echo "caddy running !!!" 
caddy -conf ./tools/new/Caddyfile
