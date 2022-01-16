function go() {
	//上一个页面
	window.history.go(-1);
	obj.state = "0";
	obj.date = new Date().format("yyyy-MM-dd HH:mm:ss");
	localStorage.setItem("orderstate", JSON.stringify(obj));
}



window.onload = function() {
	let objs = JSON.parse(localStorage.getItem("mop"));
	let cat = document.querySelector(".cat");
	let price = document.querySelector(".price");
	let img = document.querySelector(".img");
	cat.children[0].innerText = objs.way + " 付款";
	price.innerText = objs.price;
	if (objs.way == "支付宝") {
		img.children[0].src = "img/z.jpg";
	} else if (objs.way == "微信支付") {
		img.children[0].src = "img/w.png";
	} else {
		// 其他支付
		img.children[0].src = "img/w.png";
	}
}

let button = document.querySelector(".button");
let agreement = document.querySelector(".agreement");
button.firstElementChild.onclick = function() {
	agreement.style.opacity = "1";
	agreement.style.pointerEvents = "auto";
}

let option = document.querySelector(".option");
let agreementtwo = document.querySelector(".agreement-two");

let obj = JSON.parse(localStorage.getItem("commodity"));
option.onclick = function(event) {
	if (event.target.innerText == "否") {
		agreement.style.opacity = "0";
		agreement.style.pointerEvents = "none";
	} else if (event.target.innerText == "是") {
		agreement.style.opacity = "0";
		agreement.style.pointerEvents = "none";

		//获取商品页
		time(agreementtwo, 3, obj.url);
		//状态
		obj.state = "1";
		obj.date = new Date().format("yyyy-MM-dd HH:mm:ss");
		delete obj.url;
		//清除该存储
		localStorage.removeItem("mop");
		localStorage.removeItem("commodity");
		localStorage.setItem("orderstate", JSON.stringify(obj));
	}
}


function time(yc, s, url) {
	let module = yc;
	setTimeout(fn, 1000);
	let ind = s;

	function fn() {
		if (ind > 0) {
			module.style.opacity = "1";
			setTimeout(fn, 1000);
		} else {
			module.style.opacity = "0";
			window.location.href = url;
			clearTimeout(fn);
		}
		ind--;
	}
}



