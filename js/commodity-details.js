let APPcenter = document.querySelector(".APP-header");
let Apptotwo = document.querySelector(".APP-totwo");
let transparency = 0;
let center = document.querySelector(".center");


let sign = document.querySelectorAll(".sign");


center.onclick = function(event) {
	let ind = center.children.length;
	for (let k = 0; k < ind; k++) {
		if (center.children[k].innerText == event.target.innerText) {
			//定位到当前位置
			Apptotwo.scrollTo(0, sign[k].offsetTop - 30);
		}
	}
}



Apptotwo.onscroll = function() {
	//页面卷掉的高度
	if (parseInt(Apptotwo.scrollTop) > 300) {
		//透明度
		transparency = 1;
		center.style.opacity = transparency;
		// center.style.display="flex";
		center.style.pointerEvents = "auto";
		center.nextElementSibling.style.backgroundImage =
			"url(img/commodity-details/icon-share-black.faaff0b7f0.png)";
		center.previousElementSibling.firstElementChild.style.backgroundImage =
			"url(img/commodity-details/icon-back2.2d09ed8aaf.png)";
	} else {
		transparency = 0;
		// center.style.display="none";
		center.style.pointerEvents = "none";
		center.style.opacity = transparency;
		center.nextElementSibling.style.backgroundImage =
			"url(img/commodity-details/icon-share-white.10afb8d45d.png)";
		center.previousElementSibling.firstElementChild.style.backgroundImage =
			"url(img/commodity-details/icon-back3.cee4a42398.png)";
	}
	APPcenter.style.background = "rgba(255,255,255," + transparency + ")";

	//卷掉的高度大于450时
	if (Apptotwo.scrollTop > 550) {
		tops.style.display = "block";
	} else {
		tops.style.display = "none";
	}

	//标签值小于
	for (let bj = 0; bj < sign.length; bj++) {
		//获得元素距离顶部小于300时换取
		if (sign[bj].getBoundingClientRect().top < 170 && bj > 0) {

			center.children[bj].className = "tev";
			center.children[bj - 1].className = "";
		} else if (sign[bj].getBoundingClientRect().top <= 500 && bj == 0) {
			center.children[0].className = "tev";
		} else {
			center.children[bj].className = "";
		}
	}
}



let left = document.querySelector(".left");
left.onclick = function() {
	//上一个页面
	// window.history.go(-1);
	window.location.href = "mi.html";
}

//轮播图
let img = document.querySelector(".img");

/**
 * @param {Object} s 秒
 * @param {Object} elementin 元素
 */
// 轮播函数
function time(s, elementin) {
	setTimeout(funrb, 1000);
	let ind = s;
	//X轴数
	let percent = 0;
	//子元素个数
	let index = elementin.children.length;
	let bj = 1;
	//当前的页面数
	let swiper = document.querySelector(".swiper-pagination-current");

	function funrb() {
		if (ind == 0) {
			if (bj == index) {
				//x轴向
				elementin.style.transform = "translateX(0%)";
				swiper.innerText = 1;
				percent = 0;
				bj = 1;
			} else {
				percent -= 100;
				elementin.style.transform = "translateX(" + (percent) + "%)";
				bj++;
				swiper.innerText = bj;
			}
			ind = 5;
		}
		setTimeout(funrb, 1000);
		ind--;
	}
}


//返回顶部
let tops = document.querySelector(".fixed-br");

tops.onclick = function() {
	Apptotwo.scrollTo(0, 0);
}



//推荐显示隐藏效果
let nav = document.querySelector(".nav-recommend");
nav.onclick = function(event) {
	let recommendto = document.querySelectorAll(".recommend-to");
	if (event.target.innerText == "商品推荐") {
		event.currentTarget.children[0].className = "ava";
		event.currentTarget.children[1].className = "";
		recommendto[0].style.display = "-webkit-box";
		recommendto[1].style.display = "none";
	} else {
		event.currentTarget.children[0].className = "";
		event.currentTarget.children[1].className = "ava";
		recommendto[0].style.display = "none";
		recommendto[1].style.display = "block";
	}
}

let headerview = document.querySelector(".header-view");
headerview.onclick = function(event) {
	let descriptionbottom = document.querySelectorAll(".description-bottom");
	if (event.target.innerText === "商品介绍") {
		event.currentTarget.children[0].className = "avb";
		event.currentTarget.children[1].className = "";
		descriptionbottom[0].style.display = "block";
		descriptionbottom[1].style.display = "none";
	} else if (event.target.innerText === "规则参数") {
		event.currentTarget.children[0].className = "";
		event.currentTarget.children[1].className = "avb";
		descriptionbottom[0].style.display = "none";
		descriptionbottom[1].style.display = "block";
	}
}




let img3 = document.querySelector(".rb1");

//轮播图二
let img2 = document.querySelector(".advertising-roll");

let img4 = document.querySelector(".rb2");

let img5 = document.querySelector(".rb3");
/**
 * @param {Object} s 秒
 * @param {Object} elementin 轮播图父元素
 * @param {Object} tpe 要改变的呈现样式
 * @param {Object} vanish 消失效果
 * @param {Object} appear 呈现效果
 */
function time3(s, elementin, tpe, vanish, appear) {
	setTimeout(funrb, 1000);
	let ind = s;
	//X轴数
	let percent = 0;
	//子元素个数
	let index = elementin.children.length;
	let bj = 1;
	//当前的小圆点
	let bullets = document.querySelector(tpe);

	function funrb() {
		if (ind == 0) {
			if (bj == index) {
				//x轴向
				elementin.style.transform = "translateX(0%)";
				bullets.children[0].className = appear;
				bullets.children[bj - 1].className = vanish;
				percent = 0;
				bj = 1;
			} else {
				percent -= 100;
				elementin.style.transform = "translateX(" + (percent) + "%)";
				bullets.children[bj].className = appear;
				bullets.children[bj - 1].className = vanish;
				bj++;
			}
			ind = 5;
		}
		setTimeout(funrb, 1000);
		ind--;
	}
}

function bubble() {
	let bubble = document.querySelector(".bubble");
	let obj = JSON.parse(localStorage.getItem("shoppingcart"));
	if (obj) {
		bubble.style.display = "block";
		bubble.innerText = obj.length;
	}
}

//分割成数组
function splitSite(site) {
	let arr = site.split(" ");
	return arr;
}

//追加数据
function addSite(obj) {
	for(let k=0;k<obj.length;k++){
	settles2.innerHTML += '<div class = "site" >' +
		'<div >' +
		'<img src = "img/commodity-details/dw.png" style = "width: .5rem;" >' +
		'<span name = "user" > ' + obj[k].name + '</span>' +
		'<span name = "phone" > ' + splitSite(obj[k].site)[0] + ' </span>' +
		' </div> <div class = "dz" >' +
		'<p name = "site">' + splitSite(obj[k].site).join(" ").replace(splitSite(obj[k].site)[0], "") + '</p>' +
		'</div> </div>';
		}
}

let settles2 = document.querySelector(".settles");
//加载触发
window.onload = () => {
	bubble();
	time(5, img);
	time3(5, img3, ".spb1", "swiper-pagination-bullet swiper-pagination-bullet-active", "swiper-pagination-bullet");
	time3(5, img2, ".swiper", "swiper-pagination-progressbar ", "swiper-pagination-progressbars ");
	time3(5, img4, ".spb2", "swiper-pagination-bullet swiper-pagination-bullet-active", "swiper-pagination-bullet");
	time3(5, img5, ".spb3", "swiper-pagination-bullet swiper-pagination-bullet-active", "swiper-pagination-bullet");

	let obj = JSON.parse(localStorage.getItem("settletwo"));
	if (obj!=null) {
		addSite(obj);
	}
}
let masking = document.querySelector(".masking");


//关闭

function closes() {
	masking.style.transform = "translateY(200%)";
}

let an = document.querySelector(".an");
let purchasebox = document.querySelector(".purchase");
//选购
let selbot = "立即购买";

function purchase() {
	purchasebox.children[0].style.display = "block";
	purchasebox.children[1].style.display = "none";
	masking.style.transform = "translateY(0%)";
	an.children[0].style.display = "block";
	an.children[1].style.display = 'none';
	selbot = event.target.innerText;
}

function purchases() {
	purchasebox.children[0].style.display = "block";
	purchasebox.children[1].style.display = "none";
	masking.style.transform = "translateY(0%)";
	an.children[0].style.display = "none";
	an.children[1].style.display = 'flex';
}



// 数量加减
let sum = document.querySelector(".plus-num");
sum.onclick = function(event) {
	let num = event.currentTarget.children[1].innerText;
	if (event.target.getAttribute("class") == "icon-sub" && num > 1) {
		event.currentTarget.children[1].innerText = --num;
	} else if (event.target.getAttribute("class") == "icon-add" && num < 10) {
		event.currentTarget.children[1].innerText = ++num;
	}
}

// 手机选项
let bb = document.querySelectorAll(".options-group");


//价格单
let pronames = document.querySelector(".pro-names");
let prices1 = document.querySelector(".price-s1");
for (let var1 in bb) {
	let xzbb = "12GB+256GB";
	let xzys = "陶瓷白";
	let xztc = "";
	bb[var1].onclick = function(event) {
		let bt = event.currentTarget.children.length;
		for (let i = 0; i < bt; i++) {
			// 判断是否是该元素的子元素
			if (event.currentTarget.children[i] == (event.target.parentElement.className ==
					"options-group" ? event.target : event.target.parentElement)) {
				event.currentTarget.children[i].className = "ui-flex on";

				if (var1 == 0) {
					if (i == 0) {
						prices1.children[0].innerText = "￥5999";
					} else if (i == 1) {
						prices1.children[0].innerText = "￥5499";
					} else {
						prices1.children[0].innerText = "￥6499";
					}
					xzbb = event.currentTarget.children[i].innerText;
				} else if (var1 == 1) {
					xzys = event.currentTarget.children[i].innerText;
				} else {
					if (event.currentTarget.children[i].innerText == "标配") {
						xztc = "";
					} else {
						xzys = "";
						xztc = "套装版";
					}
				}
			} else {
				// 取反判断
				if (event.target.className != "options-group") {
					event.currentTarget.children[i].className = "ui-flex";
				}
			}
		}
		//拼接
		pronames.innerText = "Xiaomi 11 Ultra " + xzbb + " " + xzys + " " + xztc;
	}
}

//服务选择
let optionsgroups = document.querySelectorAll(".options-groups");
for (let var1 in optionsgroups) {
	optionsgroups[var1].onclick = function(event) {
		for (let k = 0; k < event.currentTarget.children.length; k++) {
			if (event.currentTarget.children[k] == (event.target.parentElement.className ==
					"options-groups" ? event.target : event.target.parentElement)) {
				//元素选择状态
				if (event.currentTarget.children[k].className != "ui-flex on") {
					event.currentTarget.children[k].className = "ui-flex on";
				} else {
					event.currentTarget.children[k].className = "ui-flex";
				}
			} else if (event.target.className != "options-groups") {
				// 取反判断
				event.currentTarget.children[k].className = "ui-flex";
			}

		}
	}
}



//地址
let url = window.location.href.substring(window.location.href.lastIndexOf("/") + 1,
	window.location.href.indexOf(".html") + 5);
//确定

function settle() {
	//截取
	// 获得参数信息

	if (selbot == "立即购买" && (event.target.innerText == "立即购买" || event.target.innerText == "确定")) {
		let obj = {
			price: prices1.children[0].innerText.replace("￥", ""),
			parameter: pronames.innerText,
			num: sum.children[1].innerText,
			url: url
		};
		// 转字符串缓存本地
		localStorage.setItem("commodity", JSON.stringify(obj));
		window.location.href = "settle-accounts.html";
	} else {
		//加入购物车
		let cat = {
			price: prices1.children[0].innerText.replace("￥", ""),
			parameter: pronames.innerText,
			num: sum.children[1].innerText
		};
		//追加数据
		add(cat,"shoppingcart");
		//刷新
		closes();
		times(hint, 0.1, url);
	}
}

let hint = document.querySelector(".hint");
// 地址选择
let sectiondetail = document.querySelectorAll(".section-detail");
sectiondetail[1].onclick = function() {
	masking.style.transform = "translateY(0%)";
	purchasebox.children[0].style.display = "none";
	purchasebox.children[1].style.display = "block";
}


let selsett = document.querySelector(".settles");
selsett.onclick = () => {
	//判断是否是选中当前父级元素
	for (let k = 0; k < event.currentTarget.children.length; k++) {
		if (event.currentTarget.children[k] == (event.target.parentElement.className ==
				"site" ? event.target.parentElement :
				event.target.parentElement.parentElement.className ==
				"site" ? event.target.parentElement.parentElement :
				event.target)) {
			//点击的地址 切换
			site = event.currentTarget.children[k].children[1].innerText.split(" ");
			sectiondetail[1].children[1].children[1].innerText = site[0] + " " + site[1] + " 有现货";
			masking.style.transform = "translateY(200%)";
		}
	}
}


settles = () => {
	localStorage.setItem("selsite", url);
	window.location.href = "site.html";
}



function times(yc, s, url) {
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



//轮播图3
/**
 * @param {Object} s 秒
 * @param {Object} elementin 元素
 */
// 轮播函数
/*
function time3(s, elementin) {
	setTimeout(funrb, 1000);
	let ind = s;
	//X轴数
	let percent = 0;
	//子元素个数
	let index = elementin.children.length;
	let bj = 1;
	//当前的小圆点
	let bullets=document.querySelector(".swiper-pagination-bullets");
	function funrb() {
		if (ind == 0) {
			if (bj == index) {
				//x轴向
				elementin.style.transform = "translateX(0%)";
				bullets.children[0].className="swiper-pagination-bullet";
				bullets.children[bj-1].className="swiper-pagination-bullet swiper-pagination-bullet-active";
				percent = 0;
				bj = 1;
			} else {
				percent -= 100;
				elementin.style.transform = "translateX(" + (percent) + "%)";
				bullets.children[bj].className="swiper-pagination-bullet";
				bullets.children[bj-1].className="swiper-pagination-bullet swiper-pagination-bullet-active";
				bj++;
			}
			ind = 5;
		}
		setTimeout(funrb, 1000);
		ind--;
	}
} */


/**
 * @param {Object} s 秒
 * @param {Object} elementin 元素
 */
// 轮播函数
/* function time2(s, elementin) {
	setTimeout(funrb, 1000);
	let ind = s;
	//X轴数
	let percent = 0;
	//子元素个数
	let index = elementin.children.length;
	let bj = 1;
	//当前的页面数
	let pagination = document.querySelector(".swiper-pagination").firstElementChild;
	function funrb() {
		if (ind == 0) {
			if (bj == index) {
				//x轴向
				elementin.style.transform = "translateX(0%)";
				pagination.children[0].className="swiper-pagination-progressbars ";
				pagination.children[pagination.children.length-1].className="swiper-pagination-progressbar ";
				percent = 0;
				bj = 1;
			} else {
				percent -= 100;
				elementin.style.transform = "translateX(" + (percent) + "%)";
				pagination.children[bj].className="swiper-pagination-progressbars ";
				pagination.children[bj-1].className="swiper-pagination-progressbar ";
				bj++;
			}
			ind = 5;
		}
		setTimeout(funrb, 1000);
		ind--;
	}
} */
