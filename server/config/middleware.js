const bodyParser = require('body-parser');
const morgan = require('morgan');

module.exports = (app, express) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan('dev'));
};
