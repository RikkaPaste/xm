
let idk = document.querySelector("input[name=id]");
let IDK = document.querySelector(".ID");
let submit = document.querySelector(".submit");
let agreement = document.querySelector("input[name=agreement]");

let ysks = idk.onfocus = function () {
	zq(IDK);
	show([idk], submit);
}
//输入触发
idk.oninput = () => show([idk], submit);

//显示函数
function show(name, button) {
	if (name.length == 1) {
		if (name[0].value !== "") {
			name[0].nextElementSibling.style.display = "block";
			if (name[0].value.length >= 6) {
				button.style.background = "#0B84FF";
			} else {
				button.style.background = "rgba(11, 132, 255, 0.3)";
			}
		}
	} else {
		if (name[0].value.length && name[1].value.length >= 6) {
			button.style.background = "#0B84FF";
		} else {
			button.style.background = "rgba(11, 132, 255, 0.3)";
		}
	}
}


//点击清空
idk.nextElementSibling.onclick = function () {
	empty(idk);
	this.style.display = "none";
}


//清空函数
function empty(name) {
	if (name.value !== "") {
		name.value = "";
	}
}

let yscw = idk.onblur = function () {
	if ((idk.value === "" || idk.value === null) || idk.value.length < 6) {
		cw(IDK);
		IDK.nextElementSibling.innerText = "请输入手机号";
	}
}


//正确样式
function zq(cs) {
	cs.style.border = ".05rem solid rgba(11, 132, 255, .7)";
	cs.style.borderRadius = ".33rem";
	cs.nextElementSibling.style.display = "none"
}

//错误样式
function cw(cs) {
	cs.style.border = ".05rem solid rgba(255, 0, 0, 0.7)";
	cs.style.borderRadius = ".33rem";
	cs.nextElementSibling.style.display = "block";
}



let securitycode = "";
submit.onclick = function () {
	let regExp = /^(1[3-9]\d{9})|([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
	let nouvelle = document.querySelector(".nouvelle");
	//条款弹出
	if (!agreement.checked) {
		fun();
	} else if (idk.value == "" || idk.value == null) {
		cw(IDK);
		IDK.nextElementSibling.innerText = "请输入手机号或邮箱";
	} else if (!regExp.test(idk.value)) {
		cw(IDK);
		IDK.nextElementSibling.innerText = "手机号码格式或邮箱错误";
	} else {
		//填入手机号 或邮箱
		securitycode = idk.value;
		nouvelle.firstElementChild.innerText = "验证码已发送至 " + (/^(1[3-9]\d{9})$/.test(securitycode) ? "+ 86 " : "邮箱 ") + securitycode;
		send(60, securitycode);
		time();
	}
}

//条款弹框倒计时展示
function fun() {
	let KS = document.querySelector(".KS");
	setTimeout(onclsname, 1000);
	let vs = 3;

	function onclsname() {
		if (vs > 0) {
			KS.style.display = "block";
			setTimeout(onclsname, 1000);
		} else {
			KS.style.display = "none";
			clearTimeout(onclsname);
		}
		vs--;
	};
}

//加载效果
function time() {
	let toload = document.querySelector(".to-load");
	setTimeout(oncstimes, 500);
	let wks = 1;
	function oncstimes() {
		if (wks > 0) {
			APP.style.display = "none";
			toload.style.display = "inline-block";
			setTimeout(oncstimes, 500);
		} else {
			toload.style.display = "none";
			nextStepAPP.style.display = "block";
			clearTimeout(oncstimes);
		}
		wks--;
	}
}

//返回手机号登录第一步时
let returns = document.querySelector(".return");
let nouvellea = document.querySelector(".nouvelle");

//回填方法
function ht() {
	APP.style.display = "block";
	nextStepAPP.style.display = "none";
	//回填
	idk.value = securitycode;
	registerAPP.style.display = "none";
	flogs = false;
}
nouvellea.lastElementChild.onclick = function () {
	ht();
}
returns.onclick = function () {
	ht();
}





//登录 验证码
let securitYcode = document.querySelector(".IDYZ");
let code = document.querySelector("input[name=code]");

code.onfocus = () => {
	zq(securitYcode);
}

code.oninput = function () {
	if (code.value != "") {
		zq(securitYcode);
		if (/^\d{6}$/.test(code.value)) {
			submitcode.style.background = "#0B84FF";
		} else {
			submitcode.style.background = "rgba(11, 132, 255, 0.3)";
		}
	} else {
		cw(securitYcode);
	}
}
//失焦
code.onblur = function () {
	if (code.value === "") {
		cw(securitYcode);
		securitYcode.nextElementSibling.innerText = "请输入短信验证码";
	} else if (!/^\d{6}$/.test(code.value)) {
		cw(securitYcode);
		securitYcode.nextElementSibling.innerText = "请正确输入验证码";
	} else {
		submitcode.style.background = "#0B84FF";
	}
}
//发送按钮
let flog = true;
let flogs = true;
let agreementtwo = document.querySelector('.agreement-two');
let send = code.nextElementSibling.onclick = async function (ms, type) {
	let types = idk.value;
	//短信定时控制在一次
	if (flogs === true) {
		if (flog === true) {
			//短信接收时间
			countDown(ms, code);
			flog = false;
		} else {
			countDown(120, code);
		}
		//发送
		try {
			let ks = await sendajax('post', 'http://localhost:3000/vc', { email: (type != undefined ? type : types) });
			//发送提示
			sendtime(agreementtwo, 2, ks.msg);
		} catch (error) {
			sendtime(agreementtwo, 2, '发送失败' + error);
		}
	}
}

//邮箱发送成功渲染
function sendtime(yc, s, msg) {
	let module = yc;
	setTimeout(fn, 1000);
	let ind = s;

	function fn() {
		if (ind > 0) {
			module.children[0].children[0].children[0].children[0].children[1].innerHTML = msg;
			module.style.opacity = "1";
			setTimeout(fn, 1000);
		} else {
			module.style.opacity = "0";
			clearTimeout(fn);
		}
		ind--;
	}
}

//短信发送倒计时
/**
 * @param {Object} ms 秒
 * @param {Object} ins 改变的属性
 */
function countDown(ms, ins) {
	setTimeout(times, 1000);
	let index = ms;
	function times() {
		if (index > 0) {
			ins.nextElementSibling.innerText = "重新发送 " + index + "s";
			ins.nextElementSibling.style.color = "#a8a8a8";
			//不可点击
			ins.nextElementSibling.style.pointerEvents = "none";
			setTimeout(times, 1000);
		} else {
			flogs = true;
			ins.nextElementSibling.innerText = "重新发送";
			ins.nextElementSibling.style.color = "#0B84FF";
			//可点击
			ins.nextElementSibling.style.pointerEvents = "auto";
			clearTimeout(times);
		}
		index--;
	}
}


//登录
let submitcode = document.querySelector(".submitcode");

submitcode.onclick = async function () {
	//填入验证码
	if (!/^\d{6}$/.test(code.value)) {
		cw(securitYcode);
	} else {
		try {
			//跳转页面
			let call = await sendajax('post', 'http://localhost:3000/verify', { verify: code.value });

			if (call.code == 200) {
				sendtime(agreementtwo, 2, call.msg);
				window.location.href = "mi.html"
			} else {
				sendtime(agreementtwo, 2, call.msg);
			}
		} catch (error) {
			sendtime(agreementtwo, 2, '发送错误');
		}

	}

}

//登陆方式
let form1 = document.querySelector(".form1");
let form2 = document.querySelector(".form2");
function loginUser(t) {
	let loginUsername = t.innerText;
	if (loginUsername === "用户名密码登录") {
		form1.style.display = "none";
		form2.style.display = "block";
		nextStepAPP.style.display = "none";
		APP.style.display = "block";
		flogs = false;
	} else if (loginUsername === "手机号登录") {
		form2.style.display = "none";
		form1.style.display = "block";
	}
}


//第二种登陆方式
let user = document.querySelector("input[name=user]");
let pwd = document.querySelector("input[name=pwd]");
let IDUser = document.querySelector(".ID-User");
let submitTWO = document.querySelector(".submitTWO");
user.onfocus = function () {
	zq(IDUser);
}
user.onblur = function () {
	if ((user.value === "" || user.value === null) || user.value.length < 6) {
		cw(IDUser);
	}
}



user.oninput = function () {
	if (user.value !== "") {
		user.nextElementSibling.style.display = "block";
	}
}
pwd.oninput = function () {
	show([user, pwd], submitTWO);
}
//点击清空
user.nextElementSibling.onclick = function () {
	empty(user);
	this.style.display = "none";
}
let IDpwd = document.querySelector(".ID-import-pwd");
let IDPWD = document.querySelector(".ID-PWD");
let agreement2 = document.querySelector("input[name=agreement2]");

pwd.onfocus = function () {
	IDpwd.style.border = ".05rem solid rgba(11, 132, 255, .7)";
	IDpwd.style.borderRadius = ".33rem";
	IDPWD.nextElementSibling.style.display = "none";
}
pwd.onblur = function () {
	if (user.value === "" || user.value.length < 6) {
		IDpwd.style.border = ".05rem solid rgba(255, 0, 0, 0.7)";
		IDpwd.style.borderRadius = ".33rem";
		IDPWD.nextElementSibling.style.display = "block";
	}
}

submitTWO.onclick = async function () {
	let Enp = /(^[A-Za-z0-9]{6,12}$)|(^1(3|4|5|6|7|8|9)\d{9}$)|(^\w{6,12}@[a-zA-Z]{2,5}\.[a-zA-Z]{2,3}$)/;
	//条款弹出
	if (!agreement2.checked) {
		fun();
	} else if (user.value == "") {
		cw(IDUser);
		IDUser.nextElementSibling.innerText = "请输入账号";
	} else if (!Enp.test(user.value)) {
		cw(IDUser);
		IDUser.nextElementSibling.innerText = "请正确输入账号";
	} else if (pwd.value.length < 6) {
		IDpwd.style.border = ".05rem solid rgba(255, 0, 0, 0.7)";
		IDpwd.style.borderRadius = ".33rem";
		IDPWD.nextElementSibling.style.display = "block";
	} else {
		//成功 进入
		try {
			let data = await sendajax('post', 'http://localhost:3000/users/login', { unameType: user.value, upad: pwd.value });
			//正确进入
			if (data.code != 200) {
				IDpwd.style.cssText = "border:.05rem solid rgba(255, 0, 0, 0.7);border-radius:.33rem";
				IDPWD.nextElementSibling.style.display = "block";
				IDPWD.nextElementSibling.innerText = data.msg;
			} else {
				sessionStorage.setItem('loginId', data.data.userNameId);
				window.location.href = "mi.html";
			}
		} catch (error) {
			sendtime(agreementtwo, 2, '登陆错误');
		}
	}
}

//小眼睛点击显示效果
let yj = document.querySelectorAll(".yj");
yj.forEach(index => {
	let yc = true;
	index.onclick = function () {
		//如果输入框是文本格式时设置眼睛点过
		if (index.previousElementSibling.type == 'text') {
			yc = false;
		} else {
			yc = true;
		}
		if (yc == true) {
			index.previousElementSibling.type = "text";
			yc = false;
			index.style.color = "rgba(11, 132, 255, .7)";
		} else {
			index.previousElementSibling.type = "password";
			index.style.color = " rgba(0,0,0,0.1)";
			yc = true;
		}

	}
});



//登录主页
let APP = document.querySelector(".APP");
//登录验证码收取页
let nextStepAPP = document.querySelector(".next-step-APP");
//注册页
let registerAPP = document.querySelector(".register-APP");
let userlogin = document.querySelector(".login-total");
//注册
function register(s) {
	//显示
	registerAPP.style.display = "block";
	APP.style.display = "none";
	nextStepAPP.style.display = "none";
	userlogin.style.cssText = "transform: translateX(0%)";
}

function jd2(name) {
	name.style.border = ".05rem solid rgba(11, 132, 255, .7)";
	name.style.borderRadius = ".33rem";
}

function blurerror(name) {
	name.style.border = ".05rem solid rgba(255, 0, 0, 0.7)";
	name.style.borderRadius = ".33rem";
	//设置父节点兄弟元素
	name.parentElement.nextElementSibling.style.display = "block"
}

let one = document.querySelector(".one");
let two = document.querySelector(".two");
let id2 = document.querySelector("input[name=id2]");
let code2 = document.querySelector("input[name=code2]");
let three = document.querySelector(".three");

//获焦样式
one.onclick = function () {
	jd2(one);
}
id2.onfocus = function () {
	one.style.border = "0";
	two.parentElement.nextElementSibling.style.display = "none"
	jd2(two);
}
id2.onblur = function () {
	if (id2.value === "") {
		blurerror(two);
	}
}


//验证码元素 样式
code2.onfocus = function () {
	one.style.border = "0";
	jd2(three.firstElementChild);
	three.nextElementSibling.style.display = "none"
}
code2.onblur = function () {
	if (id2.value !== "" && code2.value === "") {
		three.nextElementSibling.innerText = "请获取验证码";
		blurerror(three.firstElementChild);
	}
}
let submitregister = document.querySelectorAll(".submitregister");
code2.oninput = function () {
	if (code2.value.length == 6 && /^((1[3-9]\d{9})|([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4}))$/.test(id2.value)) {
		submitregister[0].style.cssText = "background:#0B84FF";
	} else {
		submitregister[0].style.cssText = "background:rgba(11, 132, 255, 0.3)";
	}

}
let agreement3 = document.querySelector("input[name=agreement3]");
let nouvelleregister = document.querySelector('.nouvelle-register');
//确定登录按钮
submitregister[0].onclick = async function () {
	if (!agreement3.checked) {
		fun();
	} else if (id2.value == "") {
		blurerror(two);
		two.parentElement.nextElementSibling.innerText = "请输入手机号/邮箱";
		id2.focus();
	} else if (!/^((1[3-9]\d{9})|([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4}))$/.test(id2.value)) {
		blurerror(two);
		two.parentElement.nextElementSibling.innerText = "手机号/邮箱格式错误";
	} else if (code2.value == "") {
		blurerror(three.firstElementChild);
		three.nextElementSibling.innerText = '请输入验证码';
	} else if (code2.value.length != 6) {
		blurerror(three.firstElementChild);
		three.nextElementSibling.innerText = '验证码格式必须为6位';
	} else {
		try {
			//跳转页面
			let call = await sendajax('post', 'http://localhost:3000/verify', { verify: code2.value });

			if (call.code == 200) {
				sendtime(agreementtwo, 2, call.msg);
				nouvelleregister.style.cssText = "color:black;display:block";
				nouvelleregister.innerHTML = '您注册的' + (/^(1[3-9]\d{9})$/.test(id2.value) ? "手机号" : "邮箱") +
					'为 <span style="color: #0B84FF">' + id2.value + '</span>';
				userlogin.style.cssText = "transform: translateX(-100%)"
				userlogin.setAttribute('data', '2');
			} else {
				sendtime(agreementtwo, 2, call.msg);
			}
		} catch (error) {
			sendtime(agreementtwo, 2, '发送错误');
		}
	}
}
//重新发送按钮
let send2 = code2.nextElementSibling;
send2.onclick = async function () {
	if (id2.value == "") {
		blurerror(two);
		two.parentElement.nextElementSibling.innerText = "请输入手机号/邮箱";
		id2.focus();
	} else if (!/^((1[3-9]\d{9})|([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4}))$/.test(id2.value)) {
		blurerror(two);
		two.parentElement.nextElementSibling.innerText = "手机号/邮箱格式错误";
	} else {
		countDown(120, code2);
		try {
			let ks = await sendajax('post', 'http://localhost:3000/vc', { email: id2.value });
			//发送提示
			sendtime(agreementtwo, 2, ks.msg);
		} catch (error) {
			sendtime(agreementtwo, 2, '发送失败' + error);
		}
	}
}

let return2 = document.querySelector(".return2");
//返回
return2.onclick = function () {
	if (userlogin.getAttribute('data') != 2) {
		APP.style.display = "block";
		nextStepAPP.style.display = "none";
		registerAPP.style.display = "none";
	} else {
		userlogin.setAttribute('data', '1');
		userlogin.style.cssText = "transform: translateX(0)";
		nouvelleregister.style.cssText = "color:rgba(11, 132, 255, 0.7);display:flex";
		nouvelleregister.innerHTML ='<span>系统会根据您选择的国家/地区的法律法规存储您的</span>';
	}
}



let pwd1 = document.querySelectorAll("input[name=pwd1]");
let strengths = document.querySelector('.strength');
let indextsx = document.querySelector('.indextsx');


//判断密码与确认密码是否一致
fit = (pwds) => {
	if (pwds[1].value == "") {
		pwds[1].parentElement.parentElement.nextElementSibling.style.display = "block";
	} else if (pwds[0].value != pwds[1].value) {
		pwds[1].parentElement.parentElement.nextElementSibling.style.display = "block";
		pwds[1].parentElement.parentElement.nextElementSibling.
			innerText = '密码与确认密码不一致';
	} else {
		pwds[1].parentElement.parentElement.nextElementSibling.style.display = "none";
	}
}


//遍历输入框
for (let key = 0; key < pwd1.length; key++) {
	//获焦隐藏或提示
	pwd1[key].onfocus = () => {
		pwd1[key].parentElement.style.cssText = "border:.05rem solid rgba(11, 132, 255, .7);border-radius:.33rem";
		pwd1[key].parentElement.parentElement.nextElementSibling.style.display = "none";
		if (key == 0) {
			strengths.style.display = "block";
			if (pwd1[key].value.length < 8 && pwd1[key].value != "") {
				strengths.children[0].innerText = '密码长度8~16位，数字、字母、字符至少包含两种';
				strengths.children[1].style.display = "none";
			} else {
				strengths.children[0].style.display = "none";
			}
		}
	}
	//失焦提示
	pwd1[key].onblur = () => {
		if (pwd1[key].value == "") {
			pwd1[key].parentElement.style.cssText = "border:.05rem solid rgba(255, 0, 0, 0.7);border-radius:.33rem";
			pwd1[key].parentElement.parentElement.nextElementSibling.style.display = "block";
			if (key == 0) {
				strengths.children[0].style.display = "block";
				strengths.children[1].style.display = "none";
				strengths.children[0].innerText = '请输入密码';
			} else {
				fit(pwd1);
			}
		}
	}
	pwd1[key].oninput = () => {
		//第一次输入密码框
		if (key == 0) {
			//如果输入的密码长度小于8
			if (pwd1[key].value.length < 8) {
				strengths.style.display = "block";
				strengths.children[0].style.display = "block";
				strengths.children[0].innerText = '密码长度8~16位，数字、字母、字符至少包含两种';
				strengths.children[1].style.display = "none";
				//密码符合提示内容
			} else {
				//显示密码安全级别
				strengths.children[0].style.display = "none";
				strengths.children[1].style.display = "flex";
				for (let index = 0; index < indextsx.children.length; index++) {
					let rank = strength(pwd1[key].value);
					indextsx.children[index].style.cssText = "background:#EAEAEA";
					if (rank <= 1) {
						indextsx.children[0].style.cssText = "background:red";
					} else if (rank == 2) {
						indextsx.children[1].style.cssText = "background:#FF6900";
					} else {
						indextsx.children[2].style.cssText = "background:green";
					}
				}
			}
		} else {
			if (pwd1[key].value.length < 8) {
				pwd1[key].parentElement.parentElement.nextElementSibling.style.display = "block";
				pwd1[key].parentElement.parentElement.nextElementSibling.
					innerText = '密码长度8~16位，数字、字母、字符至少包含两种';
				submitregister[1].style.cssText = "background:rgba(11, 132, 255, 0.3)";
			} else {
				fit(pwd1);
				submitregister[1].style.cssText = "background:#0B84FF";
			}
		}
	}
};

//确认按钮
submitregister[1].addEventListener('click', async () => {
	strengths.style.display = "block";
	if (pwd1[0].value == "") {
		strengths.children[0].style.display = "block";
		strengths.children[0].innerText = '请输入密码';
		strengths.children[1].style.display = "none";
	} else if (pwd1[0].value.length < 8) {
		strengths.children[0].style.display = "block";
		strengths.children[0].innerText = '密码长度8~16位，数字、字母、字符至少包含两种';
		strengths.children[1].style.display = "none";
	} else if (pwd1[0].value != pwd1[1].value) {
		pwd1[1].parentElement.parentElement.nextElementSibling.style.display = "block";
		pwd1[1].parentElement.parentElement.nextElementSibling.
			innerText = '密码与确认密码不一致';
	} else {
		//注册
		try {
			let ks = await sendajax('post', 'http://localhost:3000/users/register', { utype: id2.value, upad: pwd1[1].value });
			if (ks.code == 200) {
				//发送提示
				sendtime(agreementtwo, 2, ks.msg);
				//保存注册id
				sessionStorage.setItem('loginId', ks.id);
				window.location.href = 'user.html';
			} else {
				sendtime(agreementtwo, 3, ks.msg);
			}
		} catch (error) {
			sendtime(agreementtwo, 2, '注册失败' + error);
		}
	}
})