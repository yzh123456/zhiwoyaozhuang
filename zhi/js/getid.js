$(function(){

	//alert(1)  //ww

	var id = $.cookie('buyId');

	
	//console.log(id);

	$.ajax({

		url:"json/data4.json",

		type:"GET",

		success:function(res){

			//console.log(res)
			
			var html='';
			 html += '<div class="img_left"><div class="single_img"><div class="mark_box"></div><img src="'+res[id].url+'"/><div class="position_box"></div></div><div class="img_list"><ul><li class="active"><img src="images/12810065980587202259.jpg"></li><li><img src="images/1233007352024888026.jpg"></li><li><img src="images/11799763376284955193.jpg"></li><li><img src="images/2958234838522668057.jpg"></li></ul></div></div><div class="singledetails"><div class="timer" id="timer"><p><i>距团购结束</i><span class="day">0</span><i>天</i><span class="hours">11</span><i>小时</i><span class="minus">17</span><i>分</i><span  class="seconds">18.9</span><i>秒</i></p></div><div class="goby"><p class="nowprice"><i>￥</i><span>'+res[id].price+'</span></p><p class="gobuybtn"><a class="btn_buy" href="javascript:;">立即抢购</a></p></div><div class="introduce"><div class="introduce_price"><p class="hisprice">市场价<br><span><i></i>'+res[id].pastprice+'</span></p><p class="zhekou">折扣<br><span>1.3折</<span></p><p class="jiesheng">您节省<br><span><i>￥</i>509</span></p></div><div class="introduce_mount"><p class="buypeaple"><i>321</i><span>人已购买</span></p><p class="nobuypeaple"><i>321</i><span>人即将购买</span></p></div><div class="number"><span class="number_price">数&nbsp;量:</span><p class="number_amount"><span class="down"></span><input type="text" id="buy_number"value="1"><span class="up"></span></p></div><div class="introduce_effect"><span class="effecttip">功效</span><ul><li>润肤</li></ul></div></div><div id="b_box" ><div id="b_box_all"><img src="'+res[id].url+'"alt=""></div></div></div></div>'
						
				$('.singleinfo').html(html)
   
			}

		})
	})
