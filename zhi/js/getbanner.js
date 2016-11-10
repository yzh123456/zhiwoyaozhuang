
//banner图的轮播
$(function(){
	//alert(1);  yz ww
	var time;
	var index = 0;
	time = setInterval(fn,2000);
	function fn(){
		var $li = $('.banner_img').children();
		//console.log($li); // yz ww
		
		if(index == $li.length-1){
			index = 0;
		}else{
			index++;
		}
		//console.log(index); ww
		$li.eq(index).stop().fadeIn().siblings().stop().fadeOut(); 

		//console.log($('.banner_btn ul').children().eq(index))  ww

		$('.banner_btn ul').children().eq(index).addClass('btn_current').siblings().removeClass('btn_current');

	}


		//中间图片的划入划出

		$('.banner_img').children().mouseover(function(){
			//alert(1);  yz ww
			
		clearInterval(time);//划入关定时器

		})
		$('.banner_img').children().mouseout(function(){
			//alert(1);  yz ww
			
		time = setInterval(fn,2000);;//划出开定时器

		})

		//小点的划入划出
		$('.banner_btn ul').children().mouseover(function(){
			//alert(1);  
			
		clearInterval(time);//划入关定时器

		})
		$('.banner_btn ul').children().mouseout(function(){
			//alert(1);  yz ww
			
		time = setInterval(fn,2000);//划出开定时器

		})

		//小点的点击  显示对应的图片

		$('.banner_btn ul').children().click(function(){
			//console.log($(this).index());  yz ww

			clearInterval(time);//先关定时器

			var $li = $('.banner_img').children();

				if(index == $li.length-1){
					index = 0;
				}else{
					index++;
				}

			$li.eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut(); 

			$('.banner_btn ul').children().eq($(this).index()).addClass('btn_current').siblings().removeClass('btn_current');
			

		})





	
	

	
})