$(function(){

	//alert(1);  //ww

	getMsy(40);
	
	$('.list_goods').on('click','li',function(){
		//alert(1)  //ww
         
		 $.cookie('buyId',this.id);


		
		 //console.log(this.this.id)

		

		 

		window.location.href = 'details.html'


	})



 
	function getMsy(num){


		$.ajax({

		url:"json/data4.json",

		type:"GET",

		

		success:function(res){
			//console.log(res)  // ww
			 //1.计算分页数量

	 		var showNum=num;
            var dataL=res.length;
            var pageNum=Math.ceil(dataL/showNum);
             $('#Pagination').pagination(pageNum,{
                 num_edge_entries: 1, //边缘页数
                 num_display_entries: 4, //主体页数
                 items_per_page: 1, //每页显示1项
                 prev_text: "上一页",
                 next_text: "下一页",
                  callback:function(index){

			var html = '<ul>';

			for(var i = showNum*index; i < showNum*index+showNum;i++){
		

				html += '<li id="'+res[i].id+'"><div class="goods_img"><a href="javascript:;" target="_blank"><img src="'+res[i].url+'"></a></div><div class="goods_price"><p class="pro_name"><a href="javascript:;" target="_blank">'+res[i]. name+'</a></p><p class="now_price"><i>￥</i><span class="price_day">'+res[i]. price+'</span><del>'+res[i]. pastprice+'</del></p><p class="buy_btn"><a target="_blank"href="javascript:;">加入购物车</a></p></p></li>'
   
						}

					html +='<ul/>';

					$('.list_goods').html(html);
					}
				})	
			
			}




			
		})


			
	}



	//上一页的点击事件
			var index = 0;
			function fn1(){
				if(index == 4){
					index = 1;
				}else{
					index ++;
				}
			}
	

		function fn2(){
				if(index == 4){
					index --;
				}else{
					index = 1;
				}
			}

				$('.frist').click(function(){
					//alert(1); //ww
					fn2();
					//console.log(index);
					$('.tip_amount').find('.num').html(index);
						getMsy(40);
					//console.log(i);

				})
				//下一页的点击事件
				$('.next').click(function(){
					//alert(1); //ww
					getMsy(40);
					fn1();
					//console.log(index);
					$('.tip_amount').find('.num').html(index);

					//console.log(i);

				})





	
})