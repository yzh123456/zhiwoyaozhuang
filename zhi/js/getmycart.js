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

					var totleamout = 0;

					var html='';
					
					for(var i in car_arr){

				
				 /*html +='<div class="shopgoods_has"><div class="header_shopgoods_list"><ul><li><div class="header_goodsimg"><a href="javascript:;"><img src="'+res[car_arr[i].id].url+'"></a></div><div class="header_goodsinfo"><p class="header_ginfo_name"><a href="javascript:;">'+res[car_arr[i].id].name+'</a></p><div class="header_ginfo_opearte"><span class="header_ginfo_price">￥'+res[car_arr[i].id].price+'</span><p class="header_ginfo_amount"><span class="down"data="1"></span><input type="text" name="buy_number" value="'+car_arr[i].num+'"><span class="up" data="0"></span></p><a class="header_ginfo_del"href="javascript:;">删除</a></div></div></li></ul></div><div class="header_shopgoods_allinfo"><p class="jianshu">共<span>'+car_arr[i].num+'</span>件商品</p><p class="zongjia">共计<span>￥</span><em>'+(res[car_arr[i].id].price)*(car_arr[i].num)+'</em></p><p class="gobuy"><a href="settle.html">去购物车结算</a></p></div></div>';*/ 


				 html+='<div class="list" style="height:200px;"><div class="shopgoods_list_cont" style="border-bottom:1px solid #eee;"><ul><li><div class="header_goodsimg"><a href="javascript:;"><img src="'+res[car_arr[i].id].url+'"></a></div><div class="header_goodsinfo"><p class="header_ginfo_name"><a href="javascript:;">'+res[car_arr[i].id].name+'</a></p><div class="header_ginfo_opearte"><span class="header_ginfo_price">￥'+res[car_arr[i].id].price+'</span><p class="header_ginfo_amount"><span class="down" data="1"></span><input type="text"  class="buy_number" value="'+car_arr[i].num+'"><span class="up" data="0"></span></p><a class="header_ginfo_del" href="javascript:;">删除</a></div></div></li></ul></div><div class="header_shopgoods_allinfo"><p class="jianshu">共<span>'+car_arr[i].num+'</span>件商品</p><p class="zongjia">共计<span>￥</span><em>'+(res[car_arr[i].id].price)*car_arr[i].num+'</em></p></div></div>'
					}

				$('.header_shopgoods').html(html)
				
			}

		}
	

	})



})