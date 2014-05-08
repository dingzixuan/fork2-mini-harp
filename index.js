var connect = require("connect");
var app = connect();
function createMiniHarp() {
  return app;
}
module.exports = createMiniHarp;
