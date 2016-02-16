'use strict';

let express = require('express');
let http = require('http');
let winston = require('winston');
let app = express();

let Server = require('./app/server');
let Routes = require('./app/routes');
let RouteHandlers = require('./app/route-handlers');

let server = new Server(http, winston);
let routeHandlers = new RouteHandlers();
let routes = new Routes(routeHandlers);

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

routes.setup(app);
server.start(app, app.get('ip'), app.get('port'));
