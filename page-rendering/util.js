let url = require("url");
let fsp = require("fs/promises");
let fs = require("fs");
let path = require("path");

module.exports.jsonResult = {
    code: 200,
    msg: '处理完成',
    data: null
}
module.exports.formatParam = (param) => {
    return url.parse(param, true);
}

module.exports.serverCopy = async (pathName, resp) => {
    let Exp = /\.(html|css|js|jpg|png|jpeg|txt|ico|gif|webp|jfif)$/;
    if (Exp.test(pathName)) {
        let htmlPath = path.resolve(__dirname, "../" + pathName);
        if (fs.existsSync(htmlPath)&&pathName!="/404.html") {
            let htmlContent = await fsp.readFile(htmlPath);
            //判断后缀是啥结尾
            let type = pathName.endsWith('.txt') ? "txt" : pathName.endsWith('.css') ? "css"
                : pathName.endsWith('.js') ? "js" : pathName.endsWith('.html') ? "html" : "plain";
            resp.writeHead(200, { "Content-Type": "text/" + type + ";charset=utf-8" });
            resp.end(htmlContent);
        } else {
            let not = await fsp.readFile(path.resolve(__dirname, "../404.html"));
            resp.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
            resp.end(not);
        }
    } else {
        resp.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
        resp.end(JSON.stringify(this.jsonResult));
    }
}