//搜索页

//返回上一个页面
//上一个页面
go = () => window.history.go(-1);

login = () => window.location.href = "login.html";


let category = document.querySelector(".category");

category.onclick = () => window.location.href = "search.html";


function cat(addcat, obj) {
	for (let k = 0; k < obj.length; k++) {
		addcat.innerHTML += '<div class="ui-flex">' +
			'<img class="right" src="img/settle-accounts/check_normal.png">' +
			'	<div class="img">' +
			'			<img src="img/settle-accounts/pms_1617008590.88834809.jpg">' +
			'	</div>' +
			'		<div class="center-cat">' +
			'		<div class="top">' +
			'		<span class="commodity-ms">' + obj[k].parameter + '</span>' +
			'		<span class="prices">售价:' + obj[k].price + '元</span>' +
			'</div>' +
			'<div class="center-versions">' +
			'		<div class="nums">' +
			'				<div class="plus-num">' +
			'					<i class="icon-sub"></i>' +
			'	<div class="input-num">' +
			'	<span>' + obj[k].num + '</span>' +
			'		</div>' +
			'		<i class="icon-add"></i>' +
			'	</div>' +
			'		<img class="remove" src="img/shopping-trolley/lj.png" style="width: .8rem;"/>' +
			'		</div>' +
			'	</div>' +
			'</div>' +
			'</div>';
	}
}
let addcat = document.querySelector(".add-cat");
let noitems = document.querySelector(".noitems");
let bottom = document.querySelector(".bottom");
let bottomaccount = document.querySelector(".bottom-account");

let obj = JSON.parse(localStorage.getItem("shoppingcart"));
window.onload = () => {
	if (obj) {
		cat(addcat, obj);
		noitems.style.display = "none";
		bottom.style.transform = "translateY(100%)";
		bottomaccount.style.transform = "translateY(0%)";
		addcat.style.display = "block";
	} else {
		noitems.style.display = "flex";
		bottom.style.transform = "translateY(0%)";
		bottomaccount.style.transform = "translateY(100%)";
		addcat.style.display = "none";
	}
}

let flex = document.querySelector(".ui-flex");


//金额
let price = 0;
//数量
let nums = 0;
//参数
let parameter;

function objs(price, nums, parameter, url) {
	if (price != 0 && nums != 0 && parameter != "") {
		return {
			price: price,
			parameter: parameter,
			num: nums,
			url: url
		};
	} else {
		return null;
	}
}


let button = document.querySelector(".button");
button.onclick = () => {
	let url = window.location.href.substring(window.location.href.lastIndexOf("/") + 1,
		window.location.href.indexOf(".html") + 5);
	if (sel) {
		let obj = objs(price, nums, parameter, url);
		// 销毁该购物车缓存
		localStorage.removeItem("shoppingcart");
		localStorage.setItem("commodity", JSON.stringify(obj));
		window.location.href = "settle-accounts.html";
	} else {
		tims(hint, 3);
	}
}

let hint = document.querySelector(".hint");
let sel = false;

function tims(yc, s) {
	let module = yc;
	setTimeout(fn, 1000);
	let ind = s;

	function fn() {
		if (ind > 0) {
			module.style.opacity = "1";
			setTimeout(fn, 1000);
		} else {
			module.style.opacity = "0";
			clearTimeout(fn);
		}
		ind--;
	}
}

let flog = true;
//删除 //读取 //显示隐藏
addcat.onclick = (event) => {
	let jg = document.querySelector(".jg");
	for (let k = 0; k < event.currentTarget.children.length; k++) {
		if (event.target.className == "remove" &&
			(event.target.parentElement.parentElement.parentElement.parentElement ==
				event.currentTarget.children[k])) {
			event.target.parentElement.parentElement.parentElement.parentElement.remove();
			//删除缓存数据
			let arr = JSON.parse(localStorage.getItem("shoppingcart"));
			arr.splice(k, 1);
			if (arr.length != 0) {
				localStorage.setItem("shoppingcart", JSON.stringify(arr));
			} else {
				//清除此条缓存
				window.location.href = "shopping-trolley.html";
				localStorage.removeItem("shoppingcart");
			}
		}
		if (event.target.className == "right"
		&&(event.target.parentElement==event.currentTarget.children[k])) {
			if (flog) {
				//参数
				parameter = event.target.nextElementSibling.nextElementSibling.children[0]
					.children[0].innerText;
				//金额
				price = event.target.nextElementSibling.nextElementSibling.children[0]
					.children[1].innerText.replace("售价:", "").replace("元", "");
				//数量
				nums = event.target.nextElementSibling.nextElementSibling
					.children[1].children[0].children[0].children[1].innerText;
				event.target.src = "img/settle-accounts/check_press.png";

				sel = true;
				flog = false;
			} else {
				sel = false;
				price = 0;
				nums = 0;
				parameter = "";
				event.target.src = "img/settle-accounts/check_normal.png";
				flog = true;
			}
		}

		//加减数量
		let num = event.currentTarget.children[k].querySelector(".input-num").innerText;
		if (event.target.getAttribute("class") == "icon-sub" && num > 1) {
			event.target.nextElementSibling.innerText = --num;
			nums = parseInt(num);
		} else if (event.target.getAttribute("class") == "icon-add" && num < 10) {
			event.currentTarget.children[k].querySelector(".input-num").innerText = ++num;
			nums = parseInt(num);
		}
	}
	jg.children[0].innerText = "共" + nums + "件 金额:"
	jg.children[1].innerText = (price * nums) + " 元";
}



// 继续购物
let shop = document.querySelector(".shop");
shop.onclick = () => {
	window.location.href = "category.html";
}
