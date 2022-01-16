//随机生成100000-999999的数字

//暴露验证码
module.exports.GetRandomNum=(Min, Max)=>{
    let Range = Max - Min;
    let Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}