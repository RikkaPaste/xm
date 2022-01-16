let agreement = document.querySelector(".agreement");
let login = document.querySelector(".header-login");

//登录显示
login.onclick = function() {
		agreement.style.opacity = "1";
	agreement.style.display = "block";
	agreement.style.zIndex = "100";
}

//不同意隐藏
let disagree = document.querySelector(".disagree");
disagree.onclick = function() {
	agreement.style.opacity = "0";
	agreement.style.display = "none";
	agreement.style.zIndex = "10";
}
//同意跳转
let consent = document.querySelector(".consent");
consent.onclick = function() {
	//打开新窗口
	// window.open("login.html");
	//当前页面打开
	window.location.href = "login.html";
}
//设置
let set = document.querySelector(".set");
set.onclick = function() {
	window.location.href = "login.html";
}
let userserve=document.querySelector(".user-serve");
let loginid=document.querySelector('.login-id');
window.onload=()=>{
	//设置存取的id
	for (const key in loginid.children) {
		loginid.children[key].innerText=sessionStorage.getItem('loginId');
	}
	let obj=JSON.parse(localStorage.getItem("orderstate"));
	if(obj){
	if(obj.state==0){
		userserve.children[0].children[2].style.display="block";
	}else if(obj.state==1){
		userserve.children[1].children[2].style.display="block";
	}
	}
	let bubble=document.querySelector(".bubble1");
		let obj1=JSON.parse(localStorage.getItem("shoppingcart"));
		if(obj1){
			bubble.style.display="block";
			bubble.innerText=obj1.length;
		}
}
let dfk=document.querySelector(".dfk");
let dsh=document.querySelector(".dsh");
let orderform=document.querySelector(".order-form");

dfk.onclick=()=>{
	window.location.href="purchase-order.html?state=0";
}
dsh.onclick=()=>{
	window.location.href="purchase-order.html?state=1";
}
orderform.onclick=()=>{
	window.location.href="purchase-order.html?state=*";
}

