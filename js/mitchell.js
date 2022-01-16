let center=document.querySelector(".center-x");

//事件委托
//循环去设置 样式
center.onclick=function(event){
	// let text = event.currentTarget;
	//获取当前点击文档内容
	let txt=event.target.innerText;
	for(let ks=0;ks<center.children.length;ks++){
		if(txt==center.children[ks].innerText){
			//设置当前点击属性样式
			event.target.className="tev";
		}else{
			//去除样式
				center.children[ks].className="";
		}
		
	}
}

window.onload=()=>{
	let bubble=document.querySelector(".bubble");
		let obj=JSON.parse(localStorage.getItem("shoppingcart"));
		if(obj){
			bubble.style.display="block";
			bubble.innerText=obj.length;
		}
}