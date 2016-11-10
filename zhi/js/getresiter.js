//注册页面的验证
$(function(){


	//alert(1);	  ww
	var isPhone = false;
	var isPwd = false;
	var isCPwd = false;
	
	//验证手机号码

	$('.account').find('.sign_txt').focus(function(){
		//alert(1)

		//console.log($('input[name=username]').val());
		$('.sign_txt').css( {boxShadow: ""});//现将所有的空
		$(this).css({
			boxShadow:" 0px 2px 16px #0DCAFE",
			boxShadow:" 0px 0px 8px #0DCAFE",
			boxShadow:" 0px 0px 8px #0DCAFE",
			//borderColor:"#0DCAFE"
		});
		$('.account').find('.error').css('display','none');

	})
	$('.account').find('.sign_txt').blur(function(){
		var $num = $('input[name=username]').val();
		//console.log($num )
		var $pattern = /^1(37|39|38|30|31|32|33|35|52|50|86|70|55|87|81|82|83|84|85|88|89)\d{8}$/g;
		if($pattern.test($num)){
			isPhone = true;

		}else{
			$('.account').find('.error').css('display','block');
		}

	})
	//密码

	$('.info_password').find('.sign_txt').focus(function(){
		//alert(1)

		$('.sign_txt').css( {boxShadow: ""});
		$(this).css({
			boxShadow:" 0px 2px 16px #0DCAFE",
			boxShadow:" 0px 0px 8px #0DCAFE",
			boxShadow:" 0px 0px 8px #0DCAFE",
			//borderColor:"#0DCAFE"
		});
		//判断里面的内容

		$('.info_password').find('.error').css('display','none');
	})

	$('.info_password').find('.sign_txt').blur(function(){
		var $pass1 = $('input[name=password]').val();
		var $pattern =/^\w{5,15}$/g;
		if($pattern.test($pass1)){
			isPwd = true;
		}else{
			$('.info_password').find('.error').css('display','block');
		}


	})
	//确认密码
	$('.password_conform').find('.sign_txt').focus(function(){
		//alert(1)

		$('.sign_txt').css( {boxShadow: ""});
		$(this).css({
			boxShadow:" 0px 2px 16px #0DCAFE",
			boxShadow:" 0px 0px 8px #0DCAFE",
			boxShadow:" 0px 0px 8px #0DCAFE",
			//borderColor:"#0DCAFE"
		});
		//判断里面的内容
$('.password_conform').find('.error').css('display','none');
	})

	$('.password_conform').find('.sign_txt').blur(function(){
		var $pass = $('input[name=password]').val();
		var $pass2 = $('input[name=password2]').val();	
		//console.log($pass2)
		if($pass == $pass2 ){
			isCPwd = true;
		}else{
			$('.password_conform').find('.error').css('display','block');
		}
	})
	//验证码
	$('.info_code').find('.sign_txt').focus(function(){
		//alert(1)

		$('.sign_txt').css( {boxShadow: ""});
		$(this).css({
			boxShadow:" 0px 2px 16px #0DCAFE",
			boxShadow:" 0px 0px 8px #0DCAFE",
			boxShadow:" 0px 0px 8px #0DCAFE",
			//borderColor:"#0DCAFE"
		});
		//判断里面的内容
		$('.info_code').find('.error').css('display','none');

	})


	//验证码为一张背景图  


	//点击换一张
		var x = 0;
		var y = 0;
	$('.info_code').find('#change_code').click(function(){
		//alert(1);   ww
	
		$('.info_code').find('a').get(0).style.backgroundPositionX = (x-110)+"px";
		return(x=x-110);

		$('.info_code').find('a').get(0).style.backgroundPositionY = (y-143)+"px";

		return(y=y-143);
	})

	//注册按钮
	$('.nfo_btn').find('input[type=submit]').click(function(){
		// alert(1); //ww
		if(isPhone == true && isPwd == true &&  isCPwd == true){

			var $useName = $('input[name=username]').val();


			var $Password = $('input[name=password]').val();

			$.cookie("useName",$useName);

			$.cookie("Password",$Password);

			alert("注册成功！");

			 window.location.href="login.html";
			}
	
	})

})