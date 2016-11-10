$(function(){
	//alert(1)  // ww

	var arr=["images/12810065980587202259.jpg","images/1233007352024888026.jpg","images/11799763376284955193.jpg","images/2958234838522668057.jpg"];

	//点击的时候显示显示对应的那一张

	$('.img_list li').each(function(i){
		$(this).click(function(){
			$(".single_img img").attr("src",arr[i])
			$('#b_box_all img').attr("src",arr[i])


			$('.img_list li').removeClass('active');
			


			$(this).addClass('active')

			
		})

	
	



	$('.mark_box').mousemove(function(event){
		//求灰色匡移动的距离

		//滑过的时候显示
		 	$('.mark_box').mouseover(function(){
		 		//alert(1)
		 		$('.position_box').css('display','block');
		 		$('#b_box').css('display','block');
		 	})
		 	//划出消失
		 	$('.mark_box').mouseout(function(){
		 		//alert(1)
		 		$('.position_box').css('display','none');
		 		$('#b_box').css('display','none');
		 	})


		var left,top;

		left = event.offsetX-$('.position_box').get(0).offsetWidth/2 ;
		top = event.offsetY-$('.position_box').get(0).offsetHeight/2 ;
		//console.log(left)
		//判断边界
		 	left = left < 0? 0:left ;
		 	top = top < 0? 0: top;
		 	left = left >$('.mark_box').get(0).offsetWidth-$('.position_box').get(0).offsetWidth?$('.mark_box').get(0).offsetWidth-$('.position_box').get(0).offsetWidth:left;

		 	top =  top > $('.mark_box').get(0).offsetHeight-$('.position_box').get(0).offsetHeight?$('.mark_box').get(0).offsetHeight-$('.position_box').get(0).offsetHeight:top;

		 	$('.position_box').get(0).style.left = left +"px";
		 	$('.position_box').get(0).style.top = top +"px";


		 	//小盒子比例

		 	var propLeft = left/($('.mark_box').get(0).offsetWidth-$('.position_box').get(0).offsetWidth);
		 	var propTop = top/($('.mark_box').get(0).offsetHeight-$('.position_box').get(0).offsetHeight);


		 	//右边大框的等比例计算

		 	

		 	$('#b_box_all').get(0).style.left= ($('#b_box').get(0).offsetWidth - $('#b_box_all').get(0).offsetWidth)*propLeft +"px";


		 	$('#b_box_all').get(0).style.top = ($('#b_box').get(0).offsetHeight - $('#b_box_all').get(0).offsetHeight)*propTop +"px";

		 	})


	})


})