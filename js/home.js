!function(){
const signinBtn = document.getElementById("signin");
const signupBtn = document.getElementById("signup");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signinBtn.addEventListener("click",()=>{
	container.classList.remove("right-panel-active")
})
signupBtn.addEventListener("click",()=>{
	container.classList.add("right-panel-active")
})

fistForm.addEventListener("submit",(e)=>e.preventDefault())
secondForm.addEventListener("submit",(e)=>e.preventDefault())
}()
var a=0;
var b=0;
/* 方法1邮箱验证 */
/* !function() {  
    var emailObj = document.querySelector(".input1");  
    emailObj.onblur = function() {  
        var email = this.value;
		  
        if (email.length) {  
            var emailRegex = /^[0-9a-z-_]{6,18}$/; 
            if (!emailRegex.test(email)) {  
                var info1 = this.nextElementSibling;  
                info1.classList.add("danger");  
                info1.innerHTML = '<span class="iconfont icon-jinggao">请输入有效的电子邮件地址</span>';  
            } else {  
                var info1 = this.nextElementSibling;  
                info1.classList.remove("danger");  
                info1.innerHTML = '';  
				var info3 = this.nextElementSibling;
				info3.classList.add("true");  
				info3.innerHTML = '<span class="iconfont icon-zhengque">该邮箱地址可用</span>';  
				}  
        } else {  
            var info1 = this.nextElementSibling;  
            info1.classList.add("danger");  
            info1.innerHTML = '<span class="iconfont icon-jinggao">请输入电子邮件地址</span>';  
        }  
    };  
}() */
/* 方法2 邮箱验证*/
!function() {  
    var emailObj = document.querySelector(".input1");  
    emailObj.onblur = function() {  
        var email = this.value;
		var info1 = this.nextElementSibling;   
		    info1.style.color = '';  
		    info1.style.visibility = '';  
		    info1.innerHTML = ''; 
		var info3 = this.nextElementSibling;  
		    info3.style.color = '';  
		    info3.style.visibility = '';  
		    info3.innerHTML = ''; 
        if (email.length) {  
            var emailRegex =/^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
            if (!emailRegex.test(email)) {
				info3.style.color = '';
				info3.style.visibility = '';  
				info3.innerHTML = '';
                info1.style.color = 'rgb(199,61,61)';
                info1.style.visibility = 'visible';  
                info1.innerHTML = '<span class="iconfont icon-jinggao">请输入有效的电子邮件地址</span>';
				emailObj.value="";
				b=0;
            } else {  
                info1.style.color = '';
                info1.style.visibility = '';  
                info1.innerHTML = ''; 
				info3.style.color = 'green';
				info3.style.visibility = 'visible';  
				info3.innerHTML = '<span class="iconfont icon-zhengque">该邮箱地址可用</span>';
				b=1;
			}  
        } else { 
			info3.style.color = '';
			info3.style.visibility = '';  
			info3.innerHTML = '';
			info1.style.color = 'rgb(199,61,61)';
			info1.style.visibility = 'visible';  
			info1.innerHTML = '<span class="iconfont icon-jinggao">请输入电子邮件地址</span>';
			b=0;
        }  
    };  
}()
/* 注册密码验证 */
!function() {  
    var passwordObj = document.querySelector(".input2");  
    passwordObj.onblur = function() {  
        var password = this.value;
		var word1 = this.nextElementSibling;   
		    word1.style.color = '';  
		    word1.style.visibility = '';  
		    word1.innerHTML = ''; 
		var word2 = this.nextElementSibling;  
		    word2.style.color = '';  
		    word2.style.visibility = '';  
		    word2.innerHTML = ''; 
        if (password.length) {  
            var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,18}$/; 
            if (!passwordRegex.test(password)) {
					word2.style.color = '';
					word2.style.visibility = '';  
					word2.innerHTML = ''; 
					word1.style.color = 'rgb(199,61,61)';
					word1.style.visibility = 'visible';  
					word1.innerHTML = '<span class="iconfont icon-jinggao">请输入包含大小写字母和数字的密码</span>'; 
					passwordObj.value="";
					a=0;
				} else {  
                word1.style.color = '';
                	word1.style.visibility = '';  
                	word1.innerHTML = ''; 
                	word2.style.color = 'green';
                	word2.style.visibility = 'visible';  
                	word2.innerHTML = '<span class="iconfont icon-zhengque">该密码可用</span>';	
					a=1;
                }  
        } else { 
				word2.style.color = '';
				word2.style.visibility = '';  
				word2.innerHTML = ''; 
				word1.style.color = 'rgb(199,61,61)';
				word1.style.visibility = 'visible';  
				word1.innerHTML = '<span class="iconfont icon-jinggao">请输入密码</span>'; 
				a=0;
			}  
    };  
}()
/* 登陆密码验证 */
!function() {  
    var passwordObj = document.querySelector(".input3");  
    passwordObj.onblur = function() {  
        var password = this.value;
		var word3 = this.nextElementSibling;   
		    word3.style.color = '';  
		    word3.style.visibility = '';  
		    word3.innerHTML = ''; 
		var word4 = this.nextElementSibling;  
		    word4.style.color = '';  
		    word4.style.visibility = '';  
		    word4.innerHTML = ''; 
        if (password.length) {  
            var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,18}$/; 
			if (!passwordRegex.test(password)) {
					word4.style.color = '';
					word4.style.visibility = '';  
					word4.innerHTML = ''; 
					word3.style.color = 'rgb(199,61,61)';
					word3.style.visibility = 'visible';  
					word3.innerHTML = '<span class="iconfont icon-jinggao">请输入包含大小写字母和数字的密码</span>'; 
					passwordObj.value="";
				} else {  
                word3.style.color = '';
                	word3.style.visibility = '';  
                	word3.innerHTML = ''; 
                	word4.style.color = 'green';
                	word4.style.visibility = 'visible';  
                	word4.innerHTML = '<span class="iconfont icon-zhengque">该密码可用</span>';	
                }  
        } else { 
				word4.style.color = '';
				word4.style.visibility = '';  
				word4.innerHTML = ''; 
				word3.style.color = 'rgb(199,61,61)';
				word3.style.visibility = 'visible';  
				word3.innerHTML = '<span class="iconfont icon-jinggao">请输入密码</span>'; 
			} 
    };  
}()
	
/* function errfun(passwordRegex,password,word4,word3,a,b,c){
	if (!passwordRegex.test(password)) {
				word4.style.color = '';
				word4.style.visibility = '';  
				word4.innerHTML = ''; 
				word3.style.color = 'rgb(199,61,61)';
				word3.style.visibility = 'visible';  
				word3.innerHTML = a; 
				passwordObj.value="";
			} else {  
	        word3.style.color = '';
	        	word3.style.visibility = '';  
	        	word3.innerHTML = ''; 
	        	word4.style.color = 'green';
	        	word4.style.visibility = 'visible';  
	        	word4.innerHTML = b;	
	        }  
	} else { 
			word4.style.color = '';
			word4.style.visibility = '';  
			word4.innerHTML = ''; 
			word3.style.color = 'rgb(199,61,61)';
			word3.style.visibility = 'visible';  
			word3.innerHTML = c; 
		}  
} */

/* 获取验证码 */
!function() {  
    var getNote = document.querySelector(".btn1");  
    var time = 60;  
    var T;
	if((a+b)!=2){time=-1;}
    getNote.onclick = function() {  
		getNote.setAttribute('disabled','disabled');
		if (T) {  
            clearInterval(T);  
        }  
        time = 60;  
		if((a+b)!=2){time=-1;}
        T = setInterval(function() {  
            time = time - 1;  
            if (time > 0) {  
                getNote.innerText = `重新获取(${time}s)`;
            } else {  
                getNote.innerText = "获取验证码";  
                clearInterval(T); 
				getNote.removeAttribute('disabled');
                T = null; 
            }  
        }, 900);  
    };  
}();
/* 验证码的验证 */
!function() {  
    var noteObj = document.querySelector(".input4");  
    noteObj.onblur = function() {  
        var password = this.value;
		var info4 = this.nextElementSibling;   
		    info4.style.color = '';  
		    info4.style.visibility = '';  
		    info4.innerHTML = ''; 
        if (password.length) {  
            var passwordRegex = /^[0-9]{4,6}$/; 
			if (!passwordRegex.test(password)) {
					info4.style.color = 'rgb(199,61,61)';
					info4.style.visibility = 'visible';  
					info4.innerHTML = '<span class="iconfont icon-jinggao">验证码格式错误</span>'; 
					noteObj.value="";
				} else {  
                	info4.style.color = 'green';
                	info4.style.visibility = 'visible';  
                	info4.innerHTML = '<span class="iconfont icon-zhengque">验证码格式正确</span>';	
                }  
        } else { 
				info4.style.color = 'rgb(199,61,61)';
				info4.style.visibility = 'visible';  
				info4.innerHTML = '<span class="iconfont icon-jinggao">请输入验证码</span>'; 
			} 
    };  
}()

!function() {  
    var noteObj = document.querySelector(".inputa");  
    noteObj.onblur = function() {  
        var password = this.value;
		var info4 = this.nextElementSibling;   
		    info4.style.color = '';  
		    info4.style.visibility = '';  
		    info4.innerHTML = ''; 
        if (password.length) {  
            var passwordRegex = /^.{6,18}$/; 
			if (!passwordRegex.test(password)) {
					info4.style.color = 'rgb(199,61,61)';
					info4.style.visibility = 'visible';  
					info4.innerHTML = '<span class="iconfont icon-jinggao">账户格式错误</span>'; 
					noteObj.value="";
				} else {  
                	info4.style.color = 'green';
                	info4.style.visibility = 'visible';  
                	info4.innerHTML = '<span class="iconfont icon-zhengque">账户名可用</span>';	
                }  
        } else { 
				info4.style.color = 'rgb(199,61,61)';
				info4.style.visibility = 'visible';  
				info4.innerHTML = '<span class="iconfont icon-jinggao">请输入账户名</span>'; 
			} 
    };  
}()

!function() {  
    var noteObj = document.querySelector(".inputb");  
    noteObj.onblur = function() {  
        var password = this.value;
		var info4 = this.nextElementSibling;   
		    info4.style.color = '';  
		    info4.style.visibility = '';  
		    info4.innerHTML = ''; 
        if (password.length) {  
            var passwordRegex = /^.{6,18}$/; 
			if (!passwordRegex.test(password)) {
					info4.style.color = 'rgb(199,61,61)';
					info4.style.visibility = 'visible';  
					info4.innerHTML = '<span class="iconfont icon-jinggao">账户格式错误</span>'; 
					noteObj.value="";
				} else {  
                	info4.style.color = 'green';
                	info4.style.visibility = 'visible';  
                	info4.innerHTML = '<span class="iconfont icon-zhengque">账户名可用</span>';	
                }  
        } else { 
				info4.style.color = 'rgb(199,61,61)';
				info4.style.visibility = 'visible';  
				info4.innerHTML = '<span class="iconfont icon-jinggao">请输入账户名</span>'; 
			} 
    };  
}()

/* 注册按钮 */
document.querySelector(".btn5").onclick=function () {
	document.querySelector(".input1").onblur()
	document.querySelector(".input2").onblur()
	document.querySelector(".input4").onblur()
	document.querySelector(".inputa").onblur()
}

/* 注册按钮 */
document.querySelector(".btn4").onclick=function () {
	document.querySelector(".input3").onblur()
	document.querySelector(".inputb").onblur()
}
