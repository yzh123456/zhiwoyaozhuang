$(function(){

	//alert(1);  //ww
	
	//console.log($('.panel ul').children())
	$('.panel ul').children().eq(0).mouseover(function(){
		//alert(1);
		//console.log($(this).index())
		//console.log($('.sidebar_tooltip').eq($(this).index()))
		$(this).children().eq(1).stop().show(100);
		
		
	})
	$('.panel ul').children().eq(0).mouseout(function(){
		//alert(1);
		//console.log($(this).index())
		//console.log($('.sidebar_tooltip').eq($(this).index()))
		$(this).children().eq(1).stop().hide(100);
		
		
	})

//我的收藏

	$('.sidebarcollect').find('a').mouseover(function(){
		//alert(1) //ww
		$('.sidebarcollect').find('.sidebar_tooltip').show(100);

	})
	$('.sidebarcollect').find('.sidebar_tooltip').mouseover(function(){
		$(this).stop().show();
	})
	$('.sidebarcollect').find('.sidebar_tooltip').mouseout(function(){
		$(this).stop().hide();
	})
	$('.sidebarcollect').find('a').mouseout(function(){
		//alert(1) //ww
		$('.sidebarcollect').find('.sidebar_tooltip').hide(100);

	})


//我的足迹
	$('.sidebar_foot').find('a').mouseover(function(){
		//alert(1) //ww
		$('.sidebar_foot').find('.sidebar_tooltip').show();

	})

	//购物车
	$('.sidebar_shopcar').mouseover(function(){
		//alert(1) //ww
	$('.sshopcar_amout').css('backgroundPosition','0 -245px');


	})

	$('.sidebar_shopcar').mouseout(function(){
		//alert(1) //ww
	$('.sshopcar_amout').css('backgroundPosition','0 -210px')
	})


	$('.sidebar_foot').find('a').mouseout(function(){
		//alert(1) //ww
		$('.sidebar_foot').find('.sidebar_tooltip').hide();

	})

	$('.sidebar_foot').find('.sidebar_tooltip').mouseover(function(){
		
		//console.log($(this))
		$(this).css('display','block')
	})
	$('.sidebar_foot').find('.sidebar_tooltip').mouseout(function(){
		
		//console.log($(this))
		$(this).css('display','none')
	})
//微信
	$('.sidebar_wechat').find('a').mouseover(function(){
		//alert(1) //ww
		$('.sidebar_wechat').find('.sidebar_tooltip').show();

	})
	$('.sidebar_wechat').find('.sidebar_tooltip').mouseover(function(){
		$(this).css('display','block')
	})
	$('.sidebar_wechat').find('.sidebar_tooltip').mouseout(function(){
			$(this).css('display','none')
		})
	$('.sidebar_wechat').find('a').mouseout(function(){
		//alert(1) //ww
		$('.sidebar_wechat').find('.sidebar_tooltip').hide();

	})
	
	//客服中心
	$('.sidebar_servers').find('a').mouseover(function(){
		//alert(1) //ww
		$('.sidebar_servers').find('.sidebar_tooltip').css('display','block');

	})
	$('.sidebar_servers').find('.sidebar_tooltip').mouseover(function(){
		$(this).css('display','block')
	})

	$('.sidebar_servers').find('.sidebar_tooltip').mouseout(function(){
		$(this).css('display','none')
	})

	$('.sidebar_servers').find('a').mouseout(function(){
		//alert(1) //ww
		$('.sidebar_servers').find('.sidebar_tooltip').hide();

	})

	

	// 点击事件

	$('.sidebar_shopcar').click(function(){
		//alert(1)  //ww
		$('.sidebar_content').stop().animate({
			'left':'-300'
		})

		var n = $('.sshopcar_amout').html();

		if(n == 0){
		$('.shopgoods_empty').css('display','block');
		$('.gobuy').css('display','none')

		$('.h_allinfo_gobuy').css('display','none');


		
		}
		


		$.getScript('js/getaddbuy.js',function(){

			$.getScript('js/getnumber.js')

			


		})




	})

	$('.sidebar_cont_closebtn').click(function(){
		$('.sidebar_content').stop().animate({
			'left':'340'
		},1000)

	})




	//回到顶部
	$('.sidebar_top').click(function(){


	$(document).scrollTop(0);

	})

	//console.log($('.sshopcar_amout').html())

	

		
	
})