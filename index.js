var connect = require("connect");
var app = connect();
function createMiniHarp(port) {
  if (!port) {
    port = 4000;    
  }
  app.listen(port);
  console.log("Starting mini-harp on http://localhost:" + port);
  return app;
}
module.exports = createMiniHarp;
