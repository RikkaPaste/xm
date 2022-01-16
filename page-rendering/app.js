let http = require("http");
let url = require("url");
let { jsonResult, formatParam, serverCopy } = require("../page-rendering/util");
let fsp = require("fs/promises");
let fs = require("fs");
let path = require("path");
//创建服务对象
let server = http.createServer();
//监听端口
server.listen(8080, () => {
    console.log("服务器在8080端口启动...");
})
//监听是否有请求到来
server.on("request", async (req, resp) => {
    let reqType = req.method;
    let reqUrl = req.url;
    let { pathname: pathName } = formatParam(reqUrl);
    if (reqUrl != "/favicon.ico") {
        switch (reqType) {
            case 'GET':
                await serverCopy(pathName, resp);
                return;
            // break;
            case 'POST':

                break;

            default:
                break;
        }
    }
    resp.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" });
    jsonResult.msg = "响应成功";
    resp.end(JSON.stringify(jsonResult));
})