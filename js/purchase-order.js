// 订单页

go = () => window.location.href = "user.html";

let category = document.querySelector(".category");

category.onclick = () => window.location.href = "search.html";

let ulheader = document.querySelector(".ul-header");
let cat = document.querySelector(".cat");
let conceal = document.querySelector(".conceal");
ulheader.onclick = (event) => {
	for (let k = 0; k < event.currentTarget.children.length; k++) {
		if (event.target.innerText == event.currentTarget.children[k].innerText) {
			event.currentTarget.children[k].className = "uls";
			// conceal.style.transform = "translateX(-" + (100 * k) + "%)";
			total[k].style.display="block";
			if (k == 0) {
				cat.children[0].innerText = "商品订单";
			} else if (k == 1) {
				cat.children[0].innerText = "待支付订单";
			} else if (k == 2) {
				cat.children[0].innerText = "待收货订单";
			}
		} else {
			total[k].style.display="none";
			event.currentTarget.children[k].className = "";
		}
	}
}
let total = document.querySelectorAll(".APP-total");


// 加载装入
let obj = JSON.parse(localStorage.getItem("orderstate"));

let goodscommodity = document.querySelectorAll(".goods-commodity");
window.onload = () => {
		let state = gain(window.location.href);
	let bubble=document.querySelector(".bubble");
		let shoppingcart=JSON.parse(localStorage.getItem("shoppingcart"));
		if(shoppingcart){
			bubble.style.display="block";
			bubble.innerText=shoppingcart.length;
		}
	
	status(state, obj);
	for (let k = 0; k < total.length; k++) {
		total[k].children[0].style.display = "none";
		total[k].children[1].style.display = "block";
		if (obj) {
			total[0].children[0].style.display = "block";
			total[0].children[1].style.display = "none";
			if (obj.state == 0) {
				total[1].children[0].style.display = "block";
				total[1].children[1].style.display = "none";
			} else if (obj.state == 1) {
				total[2].children[0].style.display = "block";
				total[2].children[1].style.display = "none";
			}
		}
	}
	dataStatus(goodscommodity, obj);
}


function inner(obj) {
	return '<div class="goods-commodity">' +
		'<div class="commodity">' +
		'<div class="commodity-top">' +
		'<div class="left">' +
		'<img src="img/favicon.ico">' +
		'	<span>小米商城</span>' +
		'	</div>' +
		'<div class="right">' + ((obj.state == 0) ? "未付款" : "待收货") + '</div>' +
		'</div>' +
		'<div class="commodity-center">' +
		'<div class="center">' +
		'	<img src="img/settle-accounts/pms_1617008590.88834809.jpg">' +
		'	<div class="commodity-ms">' + obj.parameter + '</div>' +
		'	<div class="price-right">' +
		'	<span class="prices">￥' + Number(obj.price).toFixed(2) + '</span>' +
		'<span class="num">x' + obj.num + '</span>' +
		'	</div>' +
		'</div>' +
		'</div>' +
		'<div class="commodity-bottom">' +
		'	<div class="bottoms">' +
		'	<div class="date">' + obj.date + '</div>' +
		'	<div class="sp">' +
		'		<span>共' + obj.num + '件商品</span>&nbsp;' +
		'		<span>实付金额:<span class="size">￥' + (Number(obj.price) * obj.num).toFixed(2) + '</span></span>' +
		'	</div>' +
		'</div>' +
		'	</div>' +
		'</div>' +
		'</div>';
}


// 载入
function dataStatus(goods, obj) {
	if (obj) {
		goods[0].innerHTML += inner(obj);
		if (obj.state == 0) {
			goods[1].innerHTML += inner(obj);
		} else {
			goods[2].innerHTML += inner(obj);
		}
	}
}



function status(state, obj) {
		if (state.state == "*") {
			cat.children[0].innerText = "商品订单";
			ulheader.children[0].className = "uls";
			total[0].style.display="block";
			// conceal.style.transform = "translateX(0%)";
		} else if (state.state == 0) {
			cat.children[0].innerText = "待支付订单";
			ulheader.children[1].className = "uls";
			total[1].style.display="block";
			// conceal.style.transform = "translateX(-100%)";
		} else {
			cat.children[0].innerText = "待收货订单";
			ulheader.children[2].className = "uls";
			total[2].style.display="block";
			// conceal.style.transform = "translateX(-200%)";
		}

}

//截取信息
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
}
