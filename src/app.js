const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

// BUG #1: bodyParser.json() is never called — request bodies will be undefined
// BUG #2: No CORS headers configured
app.use(bodyParser.urlencoded({ extended: true }));

// BUG #3: Route prefix has a typo — "/api/v1/ordrs" instead of "/api/v1/orders"
app.use('/api/v1/ordrs', orderRoutes);

// BUG #4: Global error handler is missing — unhandled errors crash the server
// (no error-handling middleware)

module.exports = app;
