$(function(){


	//alert(1) 
	//获取从登录页面得到的用户名 并显示出来

		var $username = $.cookie('name');
		if($username){
			$('.inner_left').css('display','none');

			$('.clearfix_left').css('display','block');

			$('.name').html($username );
		}


		
		
			
	

		
			


		//当点击退出的时候回到开始的登录注册的页面
		$('.tc').click(function(){

			//alert(1) //ww

			$('.inner_left').css('display','block');

			$('.clearfix_left').css('display','none');
		})

		

	
	
})