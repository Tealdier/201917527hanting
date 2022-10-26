window.onload=function(){
				//用户名
				var usernameElt=document.getElementById("username");
				//错误信息1
				var error1=document.getElementById("error1");
				usernameElt.onblur=function(){
					var username=usernameElt.value;
					username=username.trim();
					var usernameRegExp=/[0-9]+[a-zA-Z]+[0-9a-zA-Z]*|[a-zA-Z]+[0-9]+[0-9a-zA-Z]*/;
					var ok=usernameRegExp.test(username);
					if(username==""){
						error1.innerText="用户名不能为空!";
					}else if(username.length<6||username.length>12){
						error1.innerText="用户名长度应该在6-12之间!";
					}else if(!ok){
						error1.innerText="用户名必须是字母和数字的组合!";
					}else {
						error1.innerText="";
					}
				}
				usernameElt.onfocus=function(){
					//如果有错误，将用户名清空
					if(error1.innerText!=""){
						usernameElt.value="";
					}
					error1.innerText="";
				}

                //错误信息6
				var userpwd1Elt=document.getElementById("userpwd1");
                //密码
				var error6=document.getElementById("error6");
				userpwd1Elt.onblur=function(){
					var userpwd1=userpwd1Elt.value;
					var userpwd1RegExp=/^[a-zA-Z]\w{5,15}/;
					var ok=userpwd1RegExp.test(userpwd1);
					if(userpwd1==""){
						error6.innerText="密码不能为空!";
					}else if(userpwd1.length<8){
						error6.innerText="密码长度应该大于8位!";
					}else {
						error6.innerText="";
					}
				}
				userpwd1Elt.onfocus=function(){
					//如果有错误，将用户名清空
					if(error6.innerText!=""){
						userpwd1Elt.value="";
					}
					error6.innerText="";
				}

				//错误信息2
				var error2=document.getElementById("error2");
				//密码
				var userpwd1Elt=document.getElementById("userpwd1");
				var userpwd2Elt=document.getElementById("userpwd2");
				userpwd2Elt.onblur=function(){
					var p1=userpwd1Elt.value;
					var p2=userpwd2Elt.value;
					if(p2!=p1){
						error2.innerText="密码不一致!";
					}else{
						error2.innerText="";
					}
				}
				userpwd2Elt.onfocus=function(){
					if(error2.innerText!=""){
						userpwd2Elt.value="";
					}
					error2.innerText="";
				}

				//错误信息3
				var error3=document.getElementById("error3");
				//邮箱
				var emailElt=document.getElementById("email");
				emailElt.onblur=function(){
					var emailRegExp=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+(-.\w+)*$/;
					var ok=emailRegExp.test(emailElt.value);
					if(ok){
						error3.innerText="";
					}else{
						error3.innerText="邮箱格式错误!";
					}
				}
				emailElt.onfocus=function(){
					//如果有错误，将用户名清空
					if(error3.innerText!=""){
						emailElt.value="";
					}
					error3.innerText="";
				}

				//错误信息4
				var error4=document.getElementById("error4");
				//年龄
				var ageElt=document.getElementById("age");
				ageElt.onblur=function(){
				var age=ageElt.value;
				var ageRegExp=/^[A-Za-z0-9]{6,10}$/;
				var ok=ageRegExp.test(age);
				if(age==""){
						error4.innerText="年龄不能为空!";
					}else if(age<17){
						error4.innerText="年龄应该大于17";}
						else{error4.innerText="";}
						}
                ageElt.onfocus=function(){
					if(error4.innerText!=""){
						ageElt.value="";
					}
					error4.innerText="";
				}

				//错误信息5
				var error5=document.getElementById("error5");
				//体重
				var weightElt=document.getElementById("weight");
				weightElt.onblur=function(){
				var weight=weightElt.value;
				var weightRegExp=/^[123456789]^$/;
				var ok=weightRegExp.test(weight);
				if(weight==""){
						error5.innerText="体重不能为空!";
					}else if(weight>150||weight<30){
						error5.innerText="体重应该位于30到150内";}
						else{error5.innerText="";}
						}
                weightElt.onfocus=function(){
					if(error5.innerText!=""){
						weightElt.value="";
					}
					error5.innerText="";
				}


				//注册按钮
				document.getElementById("start").onclick=function(){
					//先触发blur
					usernameElt.focus();
					username.blur();

					userpwd2Elt.focus();
					userpwd2Elt.blur();

					emailElt.focus();
					emailElt.blur();

					ageElt.focus();
					ageElt.blur();

					weightElt.focus();
					weightElt.blur();

					userpwd1Elt.focus();
					userpwd1Elt.blur();
					//再判断
					if(error1.innerText==""
					&&error2.innerText==""
					&&error3.innerText==""
					&&error4.innerText==""
					&&error5.innerText==""
					&&error6.innerText==""){
						alert("注册成功!");
						//获取表单对象，并提交
						document.getElementById("userform").submit();
					}else{
						alert("请输入正确信息!");
					}
				}
			}