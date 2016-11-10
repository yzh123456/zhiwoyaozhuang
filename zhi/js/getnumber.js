
$(function(){


//加

$('.up').click(function(){
	
	
	//alert(1)  //ww
	//console.log($(this))
	

	var input = $(this).siblings('.buy_number');

	var obj = $(this).parents('.header_ginfo_amount');

	var per = $(this).parent().prev().html().replace('￥','') ;
	//console.log(per)
	
	var num = '';
	var price = '';
	input.attr('value',parseInt(input.attr('value')) + 1);
	//获取input的值，转化成整数再+1
	num = input.attr('value');

	price = num*per;//计算金额
	
	$(this).parent().parent().parent().parent().parent().parent().next().find('em').html(price);//将结果赋给金额

	
	$(this).parent().parent().parent().parent().parent().parent().next().find('.jianshu').children().html(num)



	


	})
	
	
	//减
	$('.down').click(function(){
	
	
		//alert(1)  //ww
	var input = $(this).siblings('.buy_number');

	var obj = $(this).parents('.header_ginfo_amount');

	var per = $(this).parent().prev().html().replace('￥','') ;
	//console.log(per)
	
	var num = '';
	var price = '';
	input.attr('value',parseInt(input.attr('value')) - 1);


	//获取input的值，转化成整数再+1
	num = input.attr('value');

		
		//console.log(num)
		if(num <= 1){
			
			num = 1;
		}
	//console.log(num)
	$(this).siblings('.buy_number').val(num);
	

	price = num*per;//计算金额
	
	$(this).parent().parent().parent().parent().parent().parent().next().find('em').html(price);//将结果赋给金额



$(this).parent().parent().parent().parent().parent().parent().next().find('.jianshu').children().html(num)




		
	})
	
	
	
	
	//删除按钮

	$('.header_ginfo_del').click(function(){

		$(this).parent().parent().parent().parent().parent().parent().remove();
//数量的增减
		var gs = $(this).parent().parent().parent().parent().parent().next().find('.jianshu').children().html();
		var zs = $('.sshopcar_amout').html();
		//console.log($('.sshopcar_amout').html())

		var c = zs-gs;
		$('.sshopcar_amout').html(c)

		if(c == 0){
			$('.shopgoods_empty').css('display','block');
			
			$('.sidebar_content').find('.h_allinfo_gobuy').css('display','none')
		}


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


})
 










