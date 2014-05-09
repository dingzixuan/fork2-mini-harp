var connect = require("connect");
var app = connect();

function createMiniHarp(root) {
  //if (!port) {
    port = 4000;    
  //}
  if (!root) {
    root = process.cwd();
  }
  //connect中间件流
  app.use(require("./lib/processor/rewrite.js")());
  app.use(require("serve-static")(root));
  app.use(require("./lib/processor/jade.js")(root));
  app.use(require("./lib/processor/less.js")(root));
  app.use(function(req, res, next) {
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
