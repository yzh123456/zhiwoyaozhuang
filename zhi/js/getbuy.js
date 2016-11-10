$(function(){
	//alert(1)
	
my_car();

	$('.btn_buy').click(function(){
		//alert(1) //ww

		var id = $.cookie('buyId');

		//console.log(id)

		//判断是否是cookie进行添加

		var first = $.cookie('goods') == null?true:false;

		//判断是否追加

		var same = false;
	
		if(first){
			//当其为空的时候 
			//第一次添加,建立json结构
			$.cookie('goods','[{id:'+id+',num:1}]');
			$.cookie('first','false');

		}else{
			//让该商品数量递增
			var str = $.cookie('goods');

			var arr = eval(str);

			//遍历所有对象。如果id相同，让该商品数量递增 ;

			for(var attr in arr){

				if(arr[attr].id == id){

					 //相同的话让json结构中num自增

					 arr[attr].num = arr[attr].num +1;

					 //将json对象转换成字符串.
					
					 var cookieStr = JSON.stringify(arr);

					 $.cookie('goods',cookieStr);

					 same = true;

				}
			}

			//如果id不同，重新建立商品对象;

			if(!same){
				var obj = {id:id,num:1};

				arr.push(obj);

				var cookieStr = JSON.stringify(arr);

				$.cookie('goods',cookieStr)

			}
		}

		my_car();
		
	})



	//页面刷新时获取购物车数量;
	//购物车

	function  my_car(){

		var car_str = $.cookie('goods');
		

		if(car_str){

			var car_arr = eval(car_str);
			var totleamout = 0;
			var sshopcar_amout = 0;
			var shopsnum = 0;
			var paytable_amonutcont = 0;


			for(var i in car_arr){

				sshopcar_amout = Number(car_arr[i].num) +sshopcar_amout;

				shopsnum = Number(car_arr[i].num) +shopsnum;

				paytable_amonutcont = Number(car_arr[i].num) +paytable_amonutcont;

				totleamout = Number(car_arr[i].num) +totleamout;


				$('.sshopcar_amout').html(sshopcar_amout);


				$('.shopsnum').children().html(shopsnum);

				//console.log($('.shopsnum').html(shopsnum))

				$('.paytable_amonutcont').html(paytable_amonutcont);

				$('.totleamout').html(totleamout);

			}
		}

	}



	

})