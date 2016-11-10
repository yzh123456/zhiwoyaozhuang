$(function(){
	//alert(1)  //ww
	$(window).scroll(function(){
		var top = $(document).scrollTop();
			//console.log(top)

		if(top >= 800){
			$('.side_nav').css('display','block');
		}else{
			$('.side_nav').css('display','none');
		}	

		//滚动判断其距离  自动显示

		//今日头条
		//console.log($('.main_push').offset().top)


		if(top >= $('.main_push').offset().top){

			$('.snav_main_push').addClass('current').siblings().removeClass('current');

		}

		//品牌团

		if(top >= $('.brand_list').offset().top){

			$('.snav_group').addClass('current').siblings().removeClass('current');

		}

		//上单新品
		if(top >=  $('.new_box').offset().top){

			$('.snav_today_deals').addClass('current').siblings().removeClass('current');

		}



		
	})

	//楼梯效果 
		//知我页面
		$('.snav_zhiwo_index').click(function(){
			//alert(1)
			$(document).scrollTop(0);
			 
		})

		//今日头条
		$('.snav_main_push').click(function(){
			//alert(1)  //ww

			$(this).addClass('current').siblings().removeClass('current');
			var offsetTop = $('.main_push').offset().top;
			//console.log($('.main_push').offset().top)
			
			$(document).scrollTop(offsetTop);

		})


	
	
	

	//品牌团
	$('.snav_group').click(function(){
		$(this).addClass('current').siblings().removeClass('current');
		//alert(1)  //ww
		var offsetTop = $('.brand_list').offset().top;
		//console.log(offsetTop)
		$(document).scrollTop(offsetTop);

	})


	//上单新品
	$('.snav_today_deals').click(function(){
		$(this).addClass('current').siblings().removeClass('current');
		var offsetTop = $('.new_box').offset().top;
		$(document).scrollTop(offsetTop);


	})
	
})