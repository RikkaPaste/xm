//推荐页轮播转换

	function recommend() {
		let zs = "button1";
		// 轮播图
		function ts(e) {
			// let bts = e.parentElement.children;
			//三元判断
			let zds = (e.name != undefined && e != undefined ? e.name : e);
			//截取字段数 .substr("shuffling-button".length)
			//设置样式，获取当前按钮的属性 "a[name=shuffling-button"+zds+"]"
			let ks = document.querySelector("span[name=" + zds + "]");
			ks.className = "swiper-pagination-bullet back";
			//判断zs赋值如果是空并且是zds值不同时设置原样式
			if (zs != "" && zs != zds) {
				//为其它元素设置原来样式
				let ks1 = document.querySelector("span[name=" + zs + "");
				ks1.className = "swiper-pagination-bullet";
			}
			//每次记录按钮的属性名 标记
			if (zs != zds) {
				zs = zds;
			}
		}


		//滑动轮播图 每6秒自动切换
		let bran = document.querySelectorAll(".bran img");
		let brans = document.querySelector(".bran div");
		//定时却换
		setTimeout(oncl, 1000);
		let count = 6;
		let percent = -100;

		function oncl() {
			count--;
			if (count <= 0) {
				let substrSZ = zs.substr("button".length);

				if (substrSZ == 4) {
					//调用改变小圆点方法
					ts("button1");
					brans.style.transform = "translateX(0%)";
					percent = -100;
				} else {
					//切换图片 转换
					ts("button" + (parseInt(substrSZ) + 1));
					brans.style.transform = "translateX(" + (percent) + "%)";
					percent -= 100;
				}
				count = 6;
			}
			setTimeout(oncl, 1000);
		};
	}


	/* 		//轮播图 每6秒自动切换
			let intdate1 = self.setInterval("clock1()", 6000);
			
			//img标签
			// let img=document.querySelector(".slideshow-son img");
			let bran = document.querySelector(".bran");
			function clock1() {
				let substrSZ = zs.substr("button".length);
				if (substrSZ == 4) {
					ts("button1");
					//换取图片
					// img.src="img/home/img1.jpg";
					bran.className = "bran big1";
				} else {
					//切换图片 转换
					ts("button" + (parseInt(substrSZ) + 1));
					// img.src="img/home/img"+(parseInt(substrSZ) + 1)+".jpg";
					bran.className = "bran big"+(parseInt(substrSZ) + 1);
				}
			} */

	/* 	
		//轮播图 每6秒自动切换  轮播1展示结果 
		let bran = document.querySelector(".bran");
		//定时却换
		setTimeout(oncl, 1000);
		let count = 6;
		function oncl() {
			count--;
			if (count <= 0) {
				let substrSZ = zs.substr("button".length);
				if (substrSZ == 4) {
					ts("button1");
					//换取图片
					// img.src="img/home/img1.jpg";
					bran.className = "bran big1";
				} else {
					//切换图片 转换
					ts("button" + (parseInt(substrSZ) + 1));
					// img.src="img/home/img"+(parseInt(substrSZ) + 1)+".jpg";
					bran.className = "bran big"+(parseInt(substrSZ) + 1);
				}
				count = 6;
			}
			setTimeout(oncl, 1000);
		}; */
