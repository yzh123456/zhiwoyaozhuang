$(function(){
	//alert(1)  //ww
		var name =	$.cookie('name')
		var adder =	$.cookie('adder')
		var email =	$.cookie('email')
		var phone =	$.cookie('phone')
		var email =	$.cookie('email')

		var price = $.cookie('price');
		//console.log(price)
		
		$('.paystatus_tip2').children().eq(0).html(name)
		$('.paystatus_tip2').find('em').html(adder)
		$('').find('paycmsg_infor_phone').html('手机'+phone)

	$('.paycmsg_l_tip1').find('strong').html(price)

	$('#pay_verify').find('em').html(price)
})