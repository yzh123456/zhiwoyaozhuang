$(function(){
	//点击左右按钮 实现其功能
	// alert(1);  //ww
	var  index = 0;

	function fn1(){
		$li = $('.change_inner').children();
		//console.log($li) // ww
		
		//console.log(Math.floor($li.length/4));
	if(index == Math.floor($li.length/4)-1){
			index=0;

		}else{
			index++;
		}

		//console.log(index); ww
		//$li.eq(index).css('zIndex','z_index');
		var $ul = -index*1120;
		//console.log($ul) ww

		$('.change_inner').get(0).style.left=-index*1120+"px";
		

		
	}


	function fn2(){
		$li = $('.change_inner').children();
		//console.log($li) // ww
		
		//console.log(Math.floor($li.length/4));  ww
	if(index == 0){
			index= Math.floor($li.length/4)-1;

		}else{
			index--;
		}

		//console.log(index);
		//$li.eq(index).css('zIndex','z_index');
		var $ul = -index*1120;
		//console.log($ul)

		$('.change_inner').get(0).style.left=-index*1120+"px";
		

		
	}


//左边点击
	$('.left_btn').click(function(){
		//alert(1);  //ww
		fn2();

		})


//右边点击
$('.right_btn').click(function(){
		//alert(1);  //ww
		fn1();

		})
		
		
		

	
})