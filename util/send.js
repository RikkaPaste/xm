let mail = require("../util/sendemail");
//发送
module.exports.sends = (email, minute,code) => {
    mail.emailTo({
        user: '3235746844@qq.com',
        pass: 'ttgqlzsojxpddbdc',
        email: email,
        subject: "注册验证",
        text: '您的验证码为：<span style="color:blue">' + code + '</span>请在' + minute + '分钟内完成注册，请谨慎保管'
    },(rs) => {
            if(rs.httpCode==200){
           console.log(rs.data.response);
            }else{
                console.log(rs);
            }
        })
}