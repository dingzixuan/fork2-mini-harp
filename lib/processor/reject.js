var path = require("path");

module.exports = function reject() {
  return function(req, res, next) {
    if ('.jade' == path.extname(req.url) || '.less' == path.extname(req.url)) {
      res.statusCode = 404;
      res.end();
    }
    next();
  }
}
