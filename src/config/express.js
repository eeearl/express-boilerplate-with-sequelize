'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const config = {
    viewPath: path.resolve(__dirname, './../../views')
}

export default (app) => {
  const env = app.get('env');

  // app.set('views', config.viewPath);
  // app.set('view engine', 'ejs');
  // app.engine('html', require('ejs').renderFile);
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  

  if ('production' === env) {
    //app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
    //app.use(express.static(path.join(config.root, 'public')));
    //app.set('appPath', config.root + '/public');
}

  if ('development' === env || 'test' === env) {
    app.use(express.static(path.join(config.viewPath, '.tmp')));
    app.use(express.static(path.join(config.viewPath, 'client')));
    app.set('appPath', config.viewPath);
  }
};
