"use strict";
// the polyfills must be one of the first things imported in node.js.
// The only modules to be imported higher - node modules with es6-promise 3.x or other Promise polyfill dependency
// (rule of thumb: do it if you have zone.js exception that it has been overwritten)
// if you are including modules that modify Promise, such as NewRelic,, you must include them before polyfills
require("angular2-universal-polyfills");
var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
/*import * as cookieParser from 'cookie-parser';
import * as morgan from 'morgan';
import * as compression from 'compression';*/
// Angular 2
var core_1 = require("@angular/core");
// Angular 2 Universal
var angular2_express_engine_1 = require("angular2-express-engine");
// App
var app_1 = require("./src/app");
// Routes
//import { routes } from './server.routes';
// enable prod for faster renders
core_1.enableProdMode();
var app = express();
var ROOT = path.join(path.resolve(__dirname, '..'));
// Express View
app.engine('.html', angular2_express_engine_1.createEngine({
    ngModule: app_1.AppModule,
    providers: []
}));
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname);
app.set('view engine', 'html');
app.set('json spaces', 2);
app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());
app.use(compression());
app.use(morgan('dev'));
function cacheControl(req, res, next) {
    // instruct browser to revalidate in 60 seconds
    res.header('Cache-Control', 'max-age=60');
    next();
}
// Serve static files
app.use('/assets', cacheControl, express.static(path.join(__dirname, 'assets'), { maxAge: 30 }));
app.use(cacheControl, express.static(path.join(ROOT, 'dist/client'), { index: false }));
//
/////////////////////////
// ** Example API
// Notice API should be in aseparate process
/*import { serverApi, createTodoApi } from './backend/api';
// Our API for demos only
app.get('/data.json', serverApi);
app.use('/api', createTodoApi());*/
function ngApp(req, res) {
    res.render('index', {
        req: req,
        res: res,
        // time: true, // use this to determine what part of your app is slow only in development
        preboot: false,
        baseUrl: '/',
        requestUrl: req.originalUrl,
        originUrl: "http://localhost:" + app.get('port')
    });
}
/**
 * use universal for specific routes
 */
app.get('/', ngApp);
/*routes.forEach(route => {
  app.get(`/${route}`, ngApp);
  app.get(`/${route}/!*`, ngApp);
});*/
app.get('*', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    var pojo = { status: 404, message: 'No Content' };
    var json = JSON.stringify(pojo, null, 2);
    res.status(404).send(json);
});
// Server
var server = app.listen(app.get('port'), function () {
    console.log("Listening on: http://localhost:" + server.address().port);
});
//# sourceMappingURL=server.js.map