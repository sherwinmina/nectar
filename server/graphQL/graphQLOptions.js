const schema = require('./schema.js');

const graphQLOptions = {
  schema,
  formatError(error) {
    return {
      message: error.message,
      location: error.location,
      stack: error.stack
    };
  },
  debug: true
};

module.exports = graphQLOptions;
