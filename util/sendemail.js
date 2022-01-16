import nodemailer from 'nodemailer';

/**
 * 
 * @param {*} data user 发送者邮箱,pass 授权码,email 接收者邮箱, subject 主题, text, html 内容 
 * @param {*} callback 回调函数
 */
module.exports.emailTo = (data, callback) => {
    console.log(data);
    let { user, pass, email, subject, text, html } = data;
    // 开启一个 SMTP 连接池
    var transporter = nodemailer.createTransport({
        host: 'smtp.qq.com',//主机
        secure: true, // 使用 SSL
        secureConnection: true, // 使用 SSL
        port: 465, // SMTP 端口
        auth: {
            user: user,
            pass: pass //授权码,通过QQ获取  
        }
    });
    var mailOptions = {
        from: 'test<'+user+'>', // 发送者  
        to: email, // 接受者,可以同时发送多个,以逗号隔开  
        subject: subject, // 标题  
        text: text,
        html: text
    };
    var result = {
        httpCode: 200,
        message: '发送成功!',
        data: [],
    }
    try {
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                result.httpCode = 500;
                result.message = err;
                callback(result);
                return;
            }
            result.data = info;
            callback(result);
        });
    } catch (err) {
        result.httpCode = 500;
        result.message = err;
        callback(result);
    }
    transporter.close(); // 如果没用，关闭连接池

}