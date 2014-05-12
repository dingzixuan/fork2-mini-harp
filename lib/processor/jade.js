var jade = require("jade");
var fs = require("fs");
var path = require("path");

module.exports = function makeJade(root) {
  return function(req, res, next) {
    //如果是html页面请求
    if ('.html' == path.extname(req.url)) {
      var jade_file_path = path.join(root, path.basename(req.url, '.html') + ".jade");
      //如果对应的jade文件存在
      if (fs.existsSync(jade_file_path)) {
        //读入jade文件
        fs.readFile(jade_file_path, {"encoding":"utf8"}, function(err, data){
          if (err) throw err;
          //将jade解析为html
          jade.render(data, {}, function(err, html){
            if (err) throw err;
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html; charset=UTF-8");
            res.setHeader("Content-Length", html.length);
            res.end(html);
          })
        });
      } else {
      //jade文件不存在，404
        res.statusCode = 404;
        res.end();
      }
    } else {
      next();
    }
  }
}
