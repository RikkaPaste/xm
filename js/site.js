// 收货地址增加

function go() {
	// window.history.go(-1);

	window.location.href = "settle-accounts.html";
}

let total = document.querySelector(".total");

total.onclick = function(event) {
	message(event);
}

function message(event) {
	let name = "";
	let tel = ""
	let site = "";
	for (let index = 0; index < event.currentTarget.children.length; index++) {
		//事件流判断是否该元素点击
		if (event.currentTarget.children[index] ==
			(event.target.className == "site" ? event.target :
				event.target.parentElement.className == "site" ? event.target.parentElement :
				event.target.parentElement.parentElement)) {
			//获取信息
			name = event.currentTarget.children[index].children[0].children[0].innerText;
			tel = event.currentTarget.children[index].children[0].children[1].innerText;
			site = event.currentTarget.children[index].children[1].innerText;
		}
	}
	//获取信息传入
	// window.location.href = "settle-accounts.html?" + "name=" + name + "&tel=" + tel + "&site=" + site;
	let obj = {
		name: name,
		tel: tel,
		site: site
	};
	if(localStorage.getItem("selsite")=="settle-accounts.html"){
	localStorage.setItem("settle", JSON.stringify([obj]));
	}else{
	//返回缓存里保存的url
	add(obj,"settletwo");
	}
	window.location.href = localStorage.getItem("selsite");
}

//新增地址
let adds = document.querySelector(".bottom");
adds.onclick = function() {
	window.location.href = "add-site.html";
}

function addSite(arr) {
	for (let s = 0; s < arr.length; s++) {
		if (arr[s].message) {
			//截取拼接
			for (let k = 0; k < total.children.length; k++) {
				total.children[k].innerHTML = total.children[k].innerHTML.replace("<em> 默认</em>", " ");
			}
			total.innerHTML += '<div class="site">' +
				'<div>' +
				'<span name="user">' + arr[s].name + '</span>' +
				'<span name="phone">' + arr[s].tel.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2') + '</span>' +
				'<em> 默认</em>' +
				'</div>' +
				'<div class="dz">' +
				'	<p name="site">' + arr[s].site + '</p>' +
				'</div>' +
				'</div>';
		} else {
			total.innerHTML += '<div class="site">' +
				'<div>' +
				'<span name="user">' + arr[s].name + '</span>' +
				'<span name="phone">' + arr[s].tel.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2') + '</span>' +
				'</div>' +
				'<div class="dz">' +
				'	<p name="site">' + arr[s].site + '</p>' +
				'</div>' +
				'</div>';
		}
	}
}


window.onload = function() {
	/* let url = window.location.href;
	let arr = gain(url); */
	//获取缓存数据
	let arr = JSON.parse(localStorage.getItem("site"));
	if (arr != null) {
		addSite(arr);
	}
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
