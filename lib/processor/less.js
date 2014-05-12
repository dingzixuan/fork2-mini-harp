var less = require("less");
var fs = require("fs");
var path = require("path");

module.exports = function makeLess(root) {
  return function(req, res, next) {
    //如果是css请求
    if ('.css' == path.extname(req.url)) {
      var less_file_path = path.join(root, path.basename(req.url, '.css') + ".less");
      console.log(less_file_path);
      //如果对应的less文件存在
      if (fs.existsSync(less_file_path)) {
        //读入less文件
        fs.readFile(less_file_path, {"encoding":"utf8"}, function(err, data){
          if (err) throw err;
          //console.log(typeof data);
          //将less解析为css
          less.render(data.toString(), function(err, css){
            if (err) throw err;
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/css; charset=UTF-8");
            res.setHeader("Content-Length", css.length);
            res.end(css);
          })
        });
      } else {
      //css文件不存在，404
        res.statusCode = 404;
        res.end();
      }
    } else {
      next();
    }
  }
}
