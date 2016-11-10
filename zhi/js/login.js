
//登录页面
$(function(){
	//alert(1);  //ww
	var isuserN = false;
	var isPwd = false;
//账号
	$('.account').find('.sign_txt').focus(function(){
		//alert(1)
		$(this).val($.cookie("useName"))

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
		var $username = $('.account').find('.sign_txt').val();

		//console.log($username)   //ww
		if($username == $.cookie("useName")){
			isuserN = true;

		}else{
			$('.account').find('.sign_txt').val('用户名/邮箱/手机号');
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
		var $pass = $('.info_password').find('.sign_txt').val();
		//console.log($username)   //ww
		if($pass == $.cookie("Password")){
			isPwd = true;
		}else{
			$('.info_password').find('.sign_txt').val('');
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

	//自动登录点击事件
	var index = 0;
	$('.info_operate').find('.check').click(function(){
		index  ++;
		// alert(1)
		if(index %2 != 0){
			$(this).addClass('checkgin');
		}else{
			$(this).removeClass('checkgin');
		}
	
	})

	//登录按钮
	$('.nfo_btn').find('input[type=submit]').click(function(){
		//alert(1);  //ww
		var $username = $('input[name=username]').val();
		console.log( $username)
		var $password = $('input[name=password]').val()
		if($username == ''){
			isuserN = false;
	
		}
		if($password == ''){
			isPwd = false;
	
		}
		if(isuserN == true && isPwd == true){
			$.cookie("name",$username);
			$.cookie("zl",true);

			alert("登录成功！");


			window.location.href="index.html";

			



			
		}

	})






	
})