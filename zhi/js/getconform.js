$(function(){

	//alert(1) //ww


	$.ajax({

			url:"json/data4.json",

			type:"GET",

			success:function(res){

				//console.log(res)
				var car_str = $.cookie('goods');

				if(car_str){

					var car_arr = eval(car_str);

					var paytable_amonutcont = 0;

					var html='';

					for(var i in car_arr){


					 html +='<tr><td class="paytable_namecont"><div class="paytable_proimg"><img width="68px" height="68px"src="'+res[car_arr[i].id].url+'"></div><div class="paytable_proname"><a href="javascript:;">'+res[car_arr[i].id].name+'</a></div></td><td class="paytable_pricecont">'+res[car_arr[i].id].price+'</td><td class="paytable_amonutcont">'+car_arr[i].num+'</td><td class="paytable_totlecont">'+(res[car_arr[i].id].price)*(car_arr[i].num)+'</td></tr>';
										
						
					}	


					$('.table_list').html(html)		
						


				}


		}
	})

	var price = $.cookie('price');
		//console.log(price)
		$('#total_amount').html(price);
		$('.need_pay').html(price)

		
	
})