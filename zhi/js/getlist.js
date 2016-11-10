$(function(){
	//alert(1)  //ww
	//展开
	var index = 0;
	
		
		$('.menu_btn').eq(0).click(function(){
		//alert(1)  //ww
		//console.log($(this).index())
		index ++;
		if(index%2 !=0 ){


				$(this).children().html('收起')
			
			
				$('.menu_cont').eq(0).stop().animate({
					'height':'110px'
				})
			
			}else{

				$(this).children().html('展开')
			
			
				$('.menu_cont').eq(0).stop().animate({
					'height':'45px'
				})
			}
			
		})	


		$('.menu_btn').eq(1).click(function(){
		//alert(1)  //ww
		//console.log($(this).index())
		index ++;
		if(index%2 !=0 ){


				$(this).children().html('收起')
			
			
				$('.menu_cont').eq(1).stop().animate({
					'height':'150px'
				})
			
			}else{

				$(this).children().html('展开')
			
			
				$('.menu_cont').eq(1).stop().animate({
					'height':'105px'
				})
			}
			
		})	




		$('.menu_btn').eq(2).click(function(){
		//alert(1)  //ww
		//console.log($(this).index())
		index ++;
		if(index%2 !=0 ){


				$(this).children().html('收起')
			
			
				$('.menu_cont').eq(2).stop().animate({
					'height':'130px'
				})
			
			}else{

				$(this).children().html('展开')
			
			
				$('.menu_cont').eq(2).stop().animate({
					'height':'78px'
				})
			}
			
		})
	


		


	
	

		
	
})