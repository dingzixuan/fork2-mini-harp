//var connect = require("connect");
//var app = connect();

var createMiniHarp = require("mini-harp"),
    app = createMiniHarp();
console.log("Starting http server on http://localhost:4000");
app.listen(4000);
