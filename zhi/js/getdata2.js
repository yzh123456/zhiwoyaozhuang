$(function(){

//alert(1);
	//加载data2的数据


	$.ajax({


		url:"json/data2.json",

		type:"GET",

		dataType:'json',

		success:function(res){
			//console.log(res);

			var html = '<ul>';
			//console.log(res.length)
			for(var i=0; i<res.length; i++){
				//console.log(res.length)
	           
					html +='<li><div class="goods_img"><a href="javascript:;"><img src="'+res[i].goods.url+'"/></a><div class="goods_img_efficacy"><a href="javascript:;" target="_blank">'+res[i].goods.efficacy1+'</a><a href="javascript:;" target="_blank">'+res[i].goods.efficacy2+'</a></div><div class="sale_out"></div><div class="skso_tip"><p class="sktip_txt">已抢光</p></div><div class="goods_into"><div class="goods_name"><a href="javascript:;" target="_blank"><span>'+res[i].name.discont+'</span>'+res[i].name.controduce+'</a></div><div class="goods_num"><p class="num"><i>￥</i><span>'+res[i].num.price+'</span><del>'+res[i].num.pastprice+'</del></p><p class="buy" id="'+res[i].id+'"><a href="list.html">'+res[i].num.buy+'</a></p> </div><div class="goods_tip"><p class="tip_time">	<i class="Clock">'+res[i].tip.Clock+'</i><span><span>'+res[i].tip.tip1+'</span>天<span>'+res[i].tip.tip2+'</span>小时<span>'+res[i].tip.tip3+'</span>分<span>'+res[i].tip.tip4+'</span>秒</span></p><p class="tip_count"><span>500</span>人已购买</p></div></div></li>';

				
	                   
	                  

				}

				html += '</ul>';

				$('.new_list').html(html);
				

				//console.log(.new_list);
				
					
				}
						

		})
	
	

})