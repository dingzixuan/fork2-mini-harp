var path = require("path"); 

module.exports = function rewrite() {
  return function(req, res, next) {
    if('/' == req.url) {
      req.url += 'index.html';
    }
    next();
  }
}
