#!/bin/bash

cd /var/www/angular_widget

if [ ! -d /var/www/angular_widget/node_modules ]; then
  npm cache clean -f  &&  npm install
fi;

npm start
