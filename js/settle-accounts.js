// 结算

//返回上一个页面
go = () => {
	window.location.href = "commodity-details.html"
	// 未付款订单
	obj1.state = "0";
	obj1.date = new Date().format("yyyy-MM-dd HH:mm:ss");
	localStorage.setItem("orderstate", JSON.stringify(obj1));
};

let xz = document.querySelector(".xz");
let way = "支付宝";
xz.onclick = function(event) {
	// console.log(event.target);
	for (let k = 0; k < xz.children.length; k++) {
		//判断是否是选中当前元素
		if (xz.children[k].children[0] ==
			((event.target.className == "item" || event.target.className == "item on") ?
				event.target : event.target.parentElement)) {
			event.currentTarget.children[k].children[0].className = "item on";
			//获取支付方式
			way = event.currentTarget.children[k].children[0].children[0].innerText;
		} else if ((event.target.className == "item" || event.target.className == "item on") ||
			(event.target.parentElement.className == "item" || event.target.parentElement.className == "item on")) {
			event.currentTarget.children[k].children[0].className = "item";
		}
	}
}

//收起
let gather = document.querySelector(".gather");
let flog = true;
gather.onclick = function() {
	if (flog) {
		xz.style.height = "4rem";
		gather.children[1].className = "rax225 rx";
		flog = false;
	} else {
		xz.style.height = "10.7rem";
		gather.children[1].className = "rax45 rx";
		flog = true
	}
}
//关闭顶部通知
let cross = document.querySelector(".cross");

cross.onclick = () => cross.parentElement.style.height = "0";


let yh = document.querySelector(".dyh");
let flog1 = true;
yh.onclick = function() {
	if (flog1) {
		yh.children[1].children[0].className = "person rax45";
		yh.nextElementSibling.style.height = "2.2rem";
		flog1 = false;
	} else {
		yh.children[1].children[0].className = "person rax225";
		yh.nextElementSibling.style.height = "0";
		flog1 = true;
	}
}

// 收货地址修改
let settle = document.querySelector(".settle");
settle.onclick = function() {
	let url = window.location.href.substring(window.location.href.lastIndexOf("/") + 1,
		window.location.href.indexOf(".html") + 5);
		localStorage.setItem("selsite",url);
	window.location.href = "site.html";
}


let details = document.querySelector(".distribution-details");
let jg = document.querySelector(".jg");

let name;
let tel;
let site;
let obj1 = JSON.parse(localStorage.getItem("commodity"));
window.onload = function() {
	/* 	let txt = document.location.href;
		let arr = gain(txt);
		//赋值 解码 decodeURI() */
	let arr = JSON.parse(localStorage.getItem("settle"));
	if (arr != null) {
		name = settle.children[0].children[0].children[0].innerText = arr[0].name;
		tel = settle.children[0].children[0].children[1].innerText = arr[0].tel;
		site = settle.children[0].children[1].children[0].innerText = arr[0].site;
		details.children[0].innerText = "配送至: " + arr[0].site;
	}

	let xm = document.querySelector(".xm");
	let sp = document.querySelector(".sp");
	//参数规格装入
	if (obj1 != null) {
		xm.innerText = obj1.parameter;
		xm.nextElementSibling.innerText = (Number(obj1.price) * obj1.num).toFixed(2);
		sp.children[0].innerText = (Number(obj1.price) * obj1.num).toFixed(2);
		jg.children[0].innerText = "共 " + obj1.num + " 件";
		jg.children[2].innerText = (Number(obj1.price) * obj1.num).toFixed(2);
	}
}


let button = document.querySelector(".button");
button.onclick = function() {
	let objs = {
		price: jg.children[2].innerText,
		way: way
	}
	localStorage.setItem("mop", JSON.stringify(objs));
	window.location.href = "pay-for.html";
}


/* //截取信息
function gain(url) {
	//查找?开始的位置
	let intPos = url.indexOf("?");
	let obj = {}
	if (intPos != -1) {
		//获取后面字段
		let strRight = url.substr(intPos + 1);
		//分割成数组
		let arrTmp = strRight.split('&');
		// let arr = [];
		for (let i = 0; i < arrTmp.length; i++) {
			let arrTemp = arrTmp[i].split('=');
			// let obj = {}
			//转义 存入对象
			obj[arrTemp[0]] = decodeURI(arrTemp[1]);
			// arr.push(obj)
		}
	} else {
		obj = null;
	};
	return obj;
} */
