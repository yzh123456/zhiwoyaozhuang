$(function(){

	//alert(1) //ww

	//将其信息插入到右边购物车中

	$.ajax({

			url:"json/data4.json",

			type:"GET",

			success:function(res){

				//console.log(res)
				var car_str = $.cookie('goods');

				if(car_str){

					var car_arr = eval(car_str);

					var myallinfo_allamount = 0;

					var html='';
					for(var i in car_arr){


					 html +='<tr><td><input type="checkbox" id="choseItem" class="checkBox" index="0"></td><td class="table_item_name"><div class="mycart_selpro"><p class="selpro_img"><a href="javascript:;"><img src="'+res[car_arr[i].id].url+'"></a></p><p class="selpro_name"><a href="javascript:;">'+res[car_arr[i].id].name+'</a></p></div></td><td class="table_item_price"><p>￥<span id="item-buy-price">'+res[car_arr[i].id].price+'</span></p></td><td class="table_item_amount"><div class="table_item_amoutbox"><div class="header_ginfo_amount"><span class="down"></span><input class="buy_number" value="'+car_arr[i].num+'"><span class="up"></span></div></div></td><td class="table_item_allpay"><p id="item-buy-total">'+parseInt((res[car_arr[i].id].price)*(car_arr[i].num))+'</p></td><td class="table_item_integral"><p id="integral-mall_1109948">'+res[car_arr[i].id].price+'</p></td><td class="table_item_operate"><p><a class="item-buy-delete"  href="javascript:;">删除</a><a href="javascript:;" class="p_favorite" >收藏</a></p></td></tr>';
					}

			
			

			$('tbody').html(html)
				
		}




		}




		

	})





})