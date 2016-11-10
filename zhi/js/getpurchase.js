$(function(){
	//alert(1) //ww
	//purchase
	$('.clearfix').children().mouseover(function(){
		//alert($(this).index())
		$(this).addClass('pln_current').siblings().removeClass('pln_current');
		$('.purchase_cont_page').css('display','none')

		$('.purchase_cont_page').eq($(this).index()).css('display','block');

	})

	//saletoday
	//实现左右按钮
	var index = 0;
	function  fn1(){
		var $li = $('.r_list').children();
		//console.log($li)
		if(index == Math.floor($li.length/4)-1){
			index = 0;


		}else{
			index++;
		}
		//console.log(index)
		var $ul = -index*980;
		//console.log($ul)

		$('.r_list').get(0).style.left=-index*980+"px";
		//console.log($('.r_list'))


	}


	function  fn2(){
		var $li = $('.r_list').children();
		//console.log($li)
		if(index == 0){
			index = Math.floor($li.length/4)-1;


		}else{
			index--;
		}
		//console.log(index)
		var $ul = -index*980;
		//console.log($ul)

		$('.r_list').get(0).style.left=-index*980+"px";
		//console.log($('.r_list'))


	}
	//左边
	$('.left_btn').click(function(){
		//alert(1)  //ww
		fn1();


	})
	//右边
	$('.right_btn').click(function(){
		//alert(1)  //ww
		fn2();


	})

})