
$(function(){



setTotal();
//加

$('.up').click(function(){
	
	
	//alert(1)  //ww
	//console.log($(this))
	$(this).parent().parent().parent().next().find('#item-buy-total').html()

	var input = $(this).siblings('.buy_number');

	var obj = $(this).parents('.header_ginfo_amount');

	var per =parseFloat( $(this).parent().parent().parent().prev().find('span').html());


	var num = '';
	var price = '';
	input.attr('value',parseInt(input.attr('value')) + 1);
	//获取input的值，转化成整数再+1
	num = input.attr('value');

	price =  num*per;//计算金额
	
	$(this).parent().parent().parent().next().find('#item-buy-total').html(parseFloat(price.toFixed(2)));
	//console.log(parseFloat(price))//将结果赋给金额



setTotal();

	})
	
	
	//减
	$('.down').click(function(){
	
	
		//alert(1)  //ww
		
		$(this).parent().parent().parent().next().find('#item-buy-total').html()

		var input = $(this).siblings('.buy_number');


		var per = $(this).parent().parent().parent().prev().find('span').html();
		
		var num = '';
		var price = '';
		input.attr('value',parseInt(input.attr('value')) - 1);
		//获取input的值，转化成整数再-1
		
		
		
		num = input.attr('value');
		
		//console.log(num)
		if(num <= 1){
			
			num = 1;
		}
	//console.log(num)
	$(this).siblings('.buy_number').val(num);
	
	
		price = num*per;//计算金额
		
		$(this).parent().parent().parent().next().find('#item-buy-total').html(parseFloat(price.toFixed(2)));//将结果赋给金额
		
		
			
			setTotal();
		
		
	})
	
	//总价格  加
	function  setTotal(){
		
		var s = 0;
		var p = 0;
		
		var len = $('.buy_number');
		
		var pen = $('.table_item_allpay').find('p');
		//console.log(len)
		for(var i=0; i<len.length; i++){
		
			s = parseInt(s) + parseInt($(len[i]).val());
			
		} 
		//console.log(s)
		$('.shopsnum').html(s)
	
		
		for(var i=0; i<pen.length; i++){
		
			p = parseInt(p) + parseInt($(pen[i]).html());

			
		} 
		//console.log(s)
		$('.myallinfo_allpay').find('em').html(p);

			$.cookie('price',p);
			//console.log(p)
		
	}
	
	
	//删除按钮


	$('.item-buy-delete').click(function(){
	//总数
	var n = $('.shopsnum').html();
	
	var m = $(this).parent().parent().prev().prev().prev().find('.buy_number').val();
	var  c = n - m;
	//
	$('.shopsnum').html(c);

	//总价格
	var  p1 = $('.myallinfo_allpay').find('em').html();
	
	var  p2 = $(this).parent().parent().prev().prev().children().html();
	//console.log(p2)
	var  p = p1-p2;
	$('.myallinfo_allpay').find('em').html(p)
	
	
	if(c == 0 && p == 0){
		$('.table_cont').css('display','none');

		$('.shopcar_empty').css('display','block');
	}else{
	
		c = $('.shopsnum').html(n-m);
		 p =$('.myallinfo_allpay').find('em').html(p1-p2);
	}


	$(this).parent().parent().parent().remove();
		

		

//console.log($(this).parent().parent().parent().parent().parent().next().find('.jianshu').children().html())

//删除coookie
	var id = $.cookie('buyId');
	var str = $.cookie('goods');

			var arr = eval(str);
			//console.log(arr)

			//遍历所有对象。如果id相同，让该商品删除;
	
			for(var attr in arr){

				if(arr[attr].id == id){

					
					$.cookie('goods', '', { expires: -1 });
					
				}



			}



		
	})


	//全部清光

	$('.myallinfo_delbtn').click(function(){
		alert('确定要清空购物车么？？')
		
		var id = $.cookie('buyId');
		var str = $.cookie('goods');

			var arr = eval(str);
			//console.log(arr)

			//遍历所有对象。如果id相同，让该商品删除;
	
			for(var attr in arr){

				if(arr[attr].id == id){

						$.cookie('goods', '', { expires: -1 });

					$('.table_cont').css('display','none');

					$('.shopcar_empty').css('display','block');

				
					
				}



			}


		
	})

	//收藏

	$('.p_favorite').click(function(){
		alert('收藏成功！谢谢')
	})
	
	//判断单选框是否全部选上（全部选中时复选框选中）



	var isCk = $('.checkBox');

	var checkThis = $(this).is(':checked');
	console.log(checkThis)

	//console.log(isCk)

	
	
	
	
	

})
 










