//** 导航
let arrow = document.querySelector(".down-arrow");
let headermenb = document.querySelector(".headermenb");
let headermenua = document.querySelector(".headermenua");
let headermenu = document.querySelector(".headermenu");
let masking = document.querySelector(".masking");
let arrowFlag = true;
arrow.onclick = function() {
	arrow.className = "down-arrow";
	if (arrowFlag) {
		arrow.className += " rotate180";
		arrowFlag = false;
		headermenb.style.display = "inline";
		headermenua.style.display = "none";
		headermenu.style.height = "2.6rem";
		masking.style.display = "inline";
	} else {
		arrow.className += " rotate45";
		arrowFlag = true;
		headermenb.style.display = "none";
		headermenua.style.display = "flex";
		headermenu.style.height = "1.09rem";
		masking.style.display = "none";
	}
}

//顶部
let fixed = document.querySelector(".fixed-br");
//滚动触发
window.onscroll = function() {
	//获取当前的滚动条y轴
	let top = document.body.scrollTop || document.documentElement.scrollTop;
	//回到顶部
	fixed.onclick = function() {
		scrollBy(0, -top);
	}
	//监视页面滚动条y轴动向
	//top高大于850时的状态
	if (Number(top) > 850) {
		fixed.style.display = "block"; 
	} else {
		fixed.style.display = "none";
	}
}

//关闭顶部
let colse=document.querySelector(".topad div");
let slideshow = document.querySelectorAll(".slideshow");
colse.onclick=function(){
	document.querySelector(".topad").style.display="none";
}

//显示隐藏 导航控制 获取数组
let headermenuas = document.querySelectorAll(".headermenua a");
let headermencas=document.querySelectorAll(".headermenc span");
//获取传的参数值
let ks;
function fun(s) {
	//循环获取长度执行显示隐藏效果
	for (let k = 0; k < slideshow.length; k++) {
		if (k + 1 == s) {
			slideshow[k].style.display = "block";
			headermencas[k].className="headermencspan";
			headermenuas[k].className = "headermenuaas";
			
			//收取导航
			arrow.className += " rotate45";
			arrowFlag = true;
			headermenb.style.display = "none";
			headermenua.style.display = "flex";
			headermenu.style.height = "1.09rem";
			masking.style.display = "none";
			
		} else {
			slideshow[k].style.display = "none";
			headermenuas[k].className = "headermenuabs";
			headermencas[k].className="headermenc span";
		}
	}
	//如果获得的值不同，返回顶部
	if(s!=ks){
	scrollTo(0, 0);
	}
	ks=s;
}

//底部导航
let bottomButton=document.querySelectorAll(".bottom-home");
	function button(arr){
		console.log(arr);
	}
