var connect = require("connect");
var serveStatic = require("serve-static");
var app = connect();

function createMiniHarp(port, root) {
  if (!port) {
    port = 4000;    
  }
  if (!root) {
    root = process.cwd();
  }
  app.use(serveStatic(root));
  app.use(function(req, res, next) {
    //console.log(req.url);
    if(req.url == "/current-time") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end((new Date()).toISOString());
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Cannot Get " + req.url);
    }
  });
  app.listen(port);
  console.log("Starting mini-harp on http://localhost:" + port);
  return app;
}
module.exports = createMiniHarp;
