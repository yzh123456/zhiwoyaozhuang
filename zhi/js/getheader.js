$(function(){
//header_tobanner的展开
	$('.wand1').click(function(){
		//alert(1);  //yz  ww
		$('.header_tobanner').stop().animate({
			'height':'300px'
		},1000)
		$('.wand1').css('display','none');
		$('.wand2').css('display','block');
		$('.tobanner_small').css('display','none');
		$('.tobanner_big').css('display','block');
	})
	//header_tobanner的收起
	$('.wand2').click(function(){
		//alert(1);  //yz  ww
		$('.header_tobanner').stop().animate({
			'height':'100px'
		},1000,function(){
			$('.tobanner_small').stop().fadeIn({
			'height':'auto'
			},2000)	
		})
		$('.wand2').css('display','none');
		$('.wand1').css('display','block');
	
	})
	// tonav_inner_right 的滑过  
	$('.shops').mouseover(function(){
		//alert(1);  ww
		$('.weixin_img').css('display','block');
		
		$('.shops').css('background','#fff');


	})
	// tonav_inner_right 的滑过
	$('.weixin_img').mouseover(function(){
		$('.weixin_img').css('display','block');
		$('.shops').css('background','#fff');

	})
	$('.shops').mouseout(function(){
		$('.weixin_img').css('display','none');

		$('.shops').css('background','');

	})
	$('.weixin_img').mouseout(function(){
		$('.weixin_img').css('display','none');
		$('.shops').css('background','');

	})

	//我的小窝
	$('.myhome').mouseover(function(){
			$('.myhome_inner').css('display','block');
		$('.myhome').css('background','#fff');

	})
	$('.myhome').mouseout(function(){
		$('.myhome_inner').css('display','none');
		$('.myhome').css('background','');

	})
	$('.myhome_inner').mouseover(function(){
		$('.myhome_inner').css('display','block');
		$('.myhome').css('background','#fff');

	})
	$('.myhome_inner').mouseout(function(){
		$('.myhome_inner').css('display','none');
		$('.myhome').css('background','');

	})
	//  客户服务
	$('.service').mouseover(function(){
		$('.service_inner').css('display','block');
		$('.service').css('background','#fff');

	})
	$('.service').mouseout(function(){
		$('.service_inner').css('display','none');
		$('.service').css('background','');

	})
	$('.service_inner').mouseover(function(){
		$('.service_inner').css('display','block');
		$('.service').css('background','#fff');

	})
	$('.service_inner').mouseout(function(){
		$('.service_inner').css('display','none');
		$('.service').css('background','');

	})

	//mainnav 
	// mainnav 中menu_two 的滑动
	$('.menu_two').mouseover(function(){

		//
		$('.menu_two_inner').css('display','block');
	})

	$('.menu_two').mouseout(function(){

		$('.menu_two_inner').css('display','none');

	})
	$('.menu_two_inner').mouseover(function(){

		$('.menu_two_inner').css('display','block');

	})
	$('.menu_two_inner').mouseout(function(){

		$('.menu_two_inner').css('display','none');

	})
	//知我淘淘  背景图片的改变
	$('.menu_three').mouseover(function(){

		$('.img1').css('display','none');
		$('.img2').css('display','block');
	})
	$('.menu_three').mouseout(function(){

		$('.img1').css('display','block');
		$('.img2').css('display','none');
	})


//  mainnav_right  右边的运动  改变其宽度
//var index = 0;
//第一个
$('.right_inner').find('li').eq(0).mouseover(function(){
	//alert(1);  //yz ww
	//console.log($(this).index())
	$(this).stop().animate({
		'width':'74px'
		
	})

})
//  第二个

$('.right_inner').find('li').eq(1).mouseover(function(){
	//alert(1);  //yz ww
	//console.log($(this).index())
	$(this).stop().animate({
		'width':'74px'
		
	})

})
//第三个
$('.right_inner').find('li').eq(2).mouseover(function(){
	//alert(1);  //yz ww
	//console.log($(this).index())
	$(this).stop().animate({
		'width':'74px'
		
	})

})
// 第四个  宽度为105px
$('.right_inner').find('li').eq(3).mouseover(function(){
	//alert(1);  //yz ww
	//console.log($(this).index())
	$(this).stop().animate({
		'width':'105px'
		
	})

})
//划出时宽度变为0

$('.right_inner').find('li').mouseout(function(){
	//alert(1);  //yz ww
	//console.log($(this));
	$('.right_inner').find('li').eq($(this).index()).stop().animate({
		'width':'0px'
		
	},1000)
	//index++;
	
	
})


//购物车的显示

$('.header_shop').mouseover(function(){

	//头部购物车的显示
	//alert(1)  //ww
	$('.totleamout').css('display','block')

	var  num =$('.totleamout').html();


	if(num == 0){

		$('.shopgoods').css('display','block');
		$('.header_shopgoods').css('display','none')

	}else{
		$('.shopgoods').css('display','none');
		
		$('.header_shopgoods').css('display','block')
		
	}

	
	

	$.getScript('js/getmycart.js',function(){

		$.getScript('js/getnumber.js')
	})
	
})


$('.header_shop').mouseout(function(){

	$('.shopgoods').css('display','none');
	$('.header_shopgoods').css('display','none')
})


$('.header_shopgoods').mouseover(function(){

	//头部购物车的显示
	//alert(1)  //ww
	$('.header_shopgoods').css('display','block')

	
})

$('.header_shopgoods').mouseout(function(){
	$('.header_shopgoods').css('display','none')
})


$('.shopgoods').mouseover(function(){

	//头部购物车的显示
	//alert(1)  //ww
	$('.shopgoods').css('display','block')

	
})

$('.shopgoods').mouseout(function(){
	$('.shopgoods').css('display','none')
})

//跳转登录页面
$('.inner_left').children().eq(1).click(function(){
	//alert(1);  //yz ww
	window.location.href = "login.html"
})

//跳转注册页面

		//console.log($('.resgiterbtn'))
$('.inner_left').children().eq(2).click(function(){
	//alert(1);  
	window.location.href = "register.html"
})



})