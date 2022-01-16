//智能
function smart() {
	let zs1 = "button11";
	// 轮播图
	function ts1(e) {
		// let bts = e.parentElement.children;
		//三元判断
		let zds = (e.name != undefined && e != undefined ? e.name : e);
		//截取字段数 .substr("shuffling-button".length)
		//设置样式，获取当前按钮的属性 "a[name=shuffling-button"+zds+"]"
		let ks = document.querySelector("span[name=" + zds + "]");
		ks.className = "swiper-pagination-bullet back";
		//判断zs赋值如果是空并且是zds值不同时设置原样式
		if (zs1 != "" && zs1 != zds) {
			//为其它元素设置原来样式
			let ks1 = document.querySelector("span[name=" + zs1 + "");
			ks1.className = "swiper-pagination-bullet";
		}
		//每次记录按钮的属性名 标记
		if (zs1 != zds) {
			zs1 = zds;
		}
	}
	//滑动轮播图 每6秒自动切换
	let bran1 = document.querySelector(".bran1 div");
	//定时却换
	setTimeout(oncl1, 1000);
	let count1 = 6;
	let percent1 = -100;

	function oncl1() {
		count1--;
		if (count1 <= 0) {
			let substrSZ = zs1.substr("button1".length);

			if (substrSZ == 5) {
				//调用方法
				ts1("button11");
				bran1.style.transform = "translateX(0%)";
				percent1 = -100;
			} else {
				//切换图片 转换
				ts1("button1" + (parseInt(substrSZ) + 1));
				bran1.style.transform = "translateX(" + (percent1) + "%)";
				percent1 -= 100;
			}
			count1 = 6;
		}
		setTimeout(oncl1, 1000);
	};
}



/* 
	let intdate2 = self.setInterval("clock2()", 6000);
	//img标签
	//let img=document.querySelector(".slideshow-son img");
	function clock2() {
		let substrSZ = zs1.substr("button1".length);
		if (substrSZ == 5) {
			ts1("button11");
			//换取图片
			// img.src="img/home/img1.jpg";
			bran1.className = "bran1 rb1";
		} else {
			//切换图片 转换
			ts1("button1" + (parseInt(substrSZ) + 1));
			// img.src="img/home/img"+(parseInt(substrSZ) + 1)+".jpg";
			bran1.className = "bran1 rb" + (parseInt(substrSZ) + 1);
		}
	} */

/* //轮播图 每6秒自动切换  轮播1展示结果 
let bran1 = document.querySelector(".bran1");

//定时却换
setTimeout(oncl1, 1000);
let count1 = 6;

function oncl1() {
	count1--;
	if (count1 <= 0) {
		let substrSZ = zs1.substr("button1".length);
		if (substrSZ == 5) {
			ts1("button11");
			//换取图片
			// img.src="img/home/img1.jpg";
			bran1.className = "bran1 rb1";
		} else {
			//切换图片 转换
			ts1("button1" + (parseInt(substrSZ) + 1));
			// img.src="img/home/img"+(parseInt(substrSZ) + 1)+".jpg";
			bran1.className = "bran1 rb" + (parseInt(substrSZ) + 1);
		}
		count1 = 6;
	}
	setTimeout(oncl1, 1000);
};

 */
