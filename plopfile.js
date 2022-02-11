const {newExampleGenerator} = require('./plop/helpers/newExample');

module.exports = function (plop) {
  // controller generator
  plop.setGenerator('New Example', newExampleGenerator);
};
