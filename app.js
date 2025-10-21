const express = require('express');
const bodyParser = require('body-parser');
const routesV1 = require('./routes/v1');
const routesV2 = require('./routes/v2');
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler');

const app = express();
app.use(bodyParser.json());

// mount API versions
app.use('/api/v1', routesV1);
app.use('/api/v2', routesV2);

// not found & error handler
app.use(notFound);
app.use(errorHandler);

module.exports = app;
