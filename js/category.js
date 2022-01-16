//分类


//页面加载时
window.onload = function() {
	father.style.height = "" + (product[index - 1].offsetHeight) + "px";
	
	let bubble=document.querySelector(".bubble");
		let obj=JSON.parse(localStorage.getItem("shoppingcart"));
		if(obj){
			bubble.style.display="block";
			bubble.innerText=obj.length;
		}
}

//改变选择样式
let listul = document.querySelectorAll(".list-ul li span");
let product = document.querySelectorAll(".product-content");
let producttop = document.querySelector(".product-t");

let father = document.querySelector(".product-content-father");

let index = 1;

function lick(s) {
	// let top = document.body.scrollTop || document.documentElement.scrollTop;
	for (let k = 0; k < listul.length; k++) {
		if (s == k + 1) {
			listul[k].className = "pitch-on";
		} else {
			listul[k].className = "";
		}
	}
	//返回元素距离顶部的距离
	producttop.style.transform = "translate3d(0px,-" + ((product[s - 1].offsetTop) + 3) + "px, 0px)";
	//固定窗体
	//显示隐藏
	if (s != index) {
		//返回顶部
		product[s - 1].scrollTop = 0;
		index = s;
	}
}

//滑动 小导航选中效果
let navitem = document.querySelectorAll(".nav-item");
let categorytitle = document.querySelectorAll(".category-title");

for (let products in product) {
	//滑动时
	product[products].onscroll = function() {
		for (let navs = 1; navs < categorytitle.length; navs++) {
			//设置滑动选中效果 可视区距离顶部值小于时设置
			if (categorytitle[navs].getBoundingClientRect().top < 170 && navs > 1) {
				//横向滚动轮跟随
				navitem[navs - 1].parentElement.parentElement.scrollTo((navitem[navs - 1].offsetLeft)-85,0);
				navitem[navs - 1].className = "nav-item cur";
				navitem[navs - 2].className = "nav-item";
			} else if (categorytitle[navs].getBoundingClientRect().top < 300 && navs == 1) {
				navitem[navs - 1].className = "nav-item cur";
			} else {
				navitem[navs - 1].className = "nav-item";
			}
			
		}
	}
}

//点击定位方法
for (let navitems in navitem) {
	navitem[navitems].onclick = function(event) {
		for (let categorytitles in categorytitle) {
			if (this.innerText === categorytitle[categorytitles].innerText) {
				//定点到元素当前的位置
				product[index - 1].scrollTo(0, (categorytitle[categorytitles].offsetTop) - 50);
			}

		}
		let indq = event.currentTarget.parentElement.children;
		for (let i = 0; i < indq.length; i++) {
			indq[i].className = "nav-item";
		}
		event.target.className = "nav-item cur";	
		// x轴向保持跟随状态
		event.currentTarget.parentElement.parentElement.scrollTo((event.target.offsetLeft)-85,0);
	};
}
