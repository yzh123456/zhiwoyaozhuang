
$(function(){

	//ajax请求数据
	//alert(1);
	

    
	$.ajax({

		url:"json/data1.json",

		type:"GET",

		dataType:'json',

		success:function(res){
			//alert(res)
			//console.log(res);
			html = '<ul>';
			for(var i=0; i<res.length; i++){

					html += '<li ><div class="list_img"><a href="javascript:;"><img src="'+res[i].url+'"/></a></div><div class="list_cont"><div class="list_time"><strong class="Clock">'+res[i].cont.time.Clock+'</strong><span><span class="day">'+res[i].cont.time.date1+'</span>天<span class="hours">'+res[i].cont.time.date2+'</span>小时<span class="minus">'+res[i].cont.time.date3+'</span>分<span class="seconds">'+res[i].cont.time.date4+'</span>秒</span></div><div class="list_name"><a href="javascript:;" target="_blank"><span>'+res[i].cont.name.discont+'</span>'+res[i].cont.name.controduce+'</a></div><div class="list_price"><p class="price"><i>'+res[i].cont.price.currentprice1+'</i><span>'+res[i].cont.price.currentprice2+'</span><del>'+res[i].cont.price.pastprice+'</del></p><p class="buy" id="'+res[i].id+'"><a href="list.html">'+res[i].cont.price.shops+'</a></p></div></div></li>'
									

			}
			//console.log(res)

			html += '</ul>';
			$('.main_list').html(html);
		}
		

	})
	

	//显示时间

	$.getScript('js/gettime.js') 

	


})