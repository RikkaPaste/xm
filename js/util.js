//公用函数
Date.prototype.format = function (fmt) {
	let o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时 
		"H+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (let k in o)
		if (new RegExp("(" + k + ")").test(fmt))
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k])
				.length)));
	return fmt;
}



/**
 * @param {Object} arr 追加的数组
 * @param {Object} obj 对象
 */
//追加
function add(obj, key) {
	let arr = [];
	if (localStorage.getItem(key) == null) {
		localStorage.setItem(key, JSON.stringify([obj]));
	} else {
		arr = JSON.parse(localStorage.getItem(key));
		arr.push(obj);
		localStorage.setItem(key, JSON.stringify(arr));
	}
}



sendajax = (type, url, data) => {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open(type, url);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify(data));
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4) {
				if (xhr.status >= 200 && xhr.status < 300) {
					resolve(JSON.parse(xhr.responseText));
				} else {
					reject(xhr.status);
				}
			}
		}
	})
}


//密码强度

strength = (pwd) => {
	let rank = 0;
	if (/[a-z][0-9]|[0-9][a-z]/.test(pwd)) {
		rank++;
	};
	if (/\W/.test(pwd)) {
		rank++;
	};
	if(/[A-Z]/.test(pwd)){
		rank++;
	}
	if(pwd.length<8){
		rank=0;
	}
	return rank;
}