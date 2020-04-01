const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
// Get port number if passed as system environment variable or fallback to 3000
const PORT = process.env.PORT || 3000;

// import routes
const apiRoutes = require('./api/routes');
const { handle404, handleServerErrors } = require('./common/routes');
const {redirectToOriginalUrl} = require('./api/controllers');


// To parse request body as JSON
app.use(bodyParser.json());
// Log requests
app.use(morgan('combined'))

// use routes
app.use('/api', apiRoutes);
app.use('/:code',redirectToOriginalUrl);

app.use(handle404);
app.use(handleServerErrors);

app.listen(PORT, () => {
  console.log(`🚀 App is listening on http://localhost:${PORT}`);
});
