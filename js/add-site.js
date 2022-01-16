// 新增地址

// 收货地址增加
go=()=>window.history.go(-1);


let submit = document.querySelector(".bottom");
submit.onclick = function() {
	//姓名
	let names = document.querySelector("input[name='name']");
	//电话
	let tel = document.querySelector("input[name='tel']");
	// 地址
	let site = document.querySelector("input[name='site']");
	//详细信息
	let detailSite = document.querySelector("input[name='detail-site']");
	// 默认
	let fault = document.querySelector("input[name='al']");
	//提示
	let message = document.querySelector(".ts-message");
	// 非空判断
	if (names.value == "") {
		message.innerText = "请输入收货人姓名";
		option.parentElement.parentElement.style.display = "block";
	} else if (tel.value == "") {
		message.innerText = "请输入11位手机号码";
		option.parentElement.parentElement.style.display = "block";
	} else if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(tel.value)) {
		message.innerText = "请正确输入11位手机号码";
		option.parentElement.parentElement.style.display = "block";
	} else if (site.value == "") {
		message.innerText = "请输入详细地址";
		option.parentElement.parentElement.style.display = "block";
	} else if (detailSite.value == "") {
		message.innerText = "请输入详细地址/门牌号";
		option.parentElement.parentElement.style.display = "block";
	} else {
		//返回
		/* window.location.href = "site.html?" + "name="
		 + names.value + "&tel=" + tel.value + "&site=" + site.value +
			" " + detailSite.value +
			"&message=" + fault.checked; */
		let arr = {
			name: names.value,
			tel: tel.value,
			site: site.value + " " + detailSite.value,
			message: fault.checked
		};
		// 缓存添加
		add(arr,"site");
		window.location.href = "site.html";
	}
}

let option = document.querySelector(".option");
option.onclick = function() {
	option.parentElement.parentElement.style.display = "none";
}
