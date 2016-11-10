$(function(){
	//alert(1)  //ww
	$(window).scroll(function(){

		var top = $(document).scrollTop();
		//console.log(top)
		//console.log($('.detail_inforbox').offset().top)

		if(top >= $('.detail_inforbox').offset().top-300){
			$('.detail_infor_nav').css('position','fixed');
			$('.detail_infor_nav').get(0).style.top = 0;


		}else{
			$('.detail_infor_nav').css('position','relative')
		}

		//商品参数
		if(top >= $('.detail_inforbox').offset().top){
			$('.numb').addClass('nav_current').siblings().removeClass('nav_current');
		}

		//商品详情
		if(top >= $('.detail_inforbox').offset().top+490){
			$('.more').addClass('nav_current').siblings().removeClass('nav_current');
		}
		//使用方法
		if(top >= $('.detail_inforbox').offset().top+5300){
			$('.idea').addClass('nav_current').siblings().removeClass('nav_current');
		}
		//用户口碑
		if(top >= $('.detail_inforbox').offset().top+5500){
			$('.good').addClass('nav_current').siblings().removeClass('nav_current');
		}




	})


	//点击事件，跳转到相应的界面
	//商品参数
	$('.numb').click(function(){
		//alert(1)  //ww
		var offsetTop = $('.detail_inforbox').offset().top;

		$(document).scrollTop(offsetTop)
	})

	//商品详情
	$('.more').click(function(){
		//alert(1)  //ww


		$(document).scrollTop($('.detail_inforbox').offset().top+490)
	})

	//使用方法
	$('.idea').click(function(){
		//alert(1)  //ww


		$(document).scrollTop($('.detail_inforbox').offset().top+5300)
	})
	//用户口碑

	$('.good').click(function(){
		//alert(1)  //ww


		$(document).scrollTop($('.detail_inforbox').offset().top+5500)
	})

	


	

})