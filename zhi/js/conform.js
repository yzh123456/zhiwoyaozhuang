$(function(){
	// alert(1) //ww
	var isName = false;

	var isAdress = false;

	var isDress = false;

	var isEmail = false;

	var isPhone = false;

	var isMail = false;
	//用户名
	$('.pername').blur(function(){
		var $name = $('input[name=receiver_name]').val();

		console.log($name);  //ww
		//console.log($(this).next())

		var $pattern  = /[\u4e00-\u9fa5_a-zA-Z0-9_]{2,10}/g;

		if($pattern.test($name)){

			isName = true;
		}else{

			$(this).next().css('display','block')
		}
 
	})

//所在地区

/*$('#province').change(function(){

	if($('.address_input').html() == null||$('.address_input item1').html() == null|| $('.address_input item2').html() == null ){

		$('.error_tip adder').css('display','block');

		
	}else{
		isAdress = true;
	}
})*/

//详细地址

$('.paycfm_peraddress').blur(function(){
	//alert(1)
	var $adder = $('input[name=street]').val();
	//console.log($adder)

	var $pattern  = /^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]+(?=.*?[\u4E00-\u9FA5])/g;




	if($pattern.test($adder)){

			isEmail = true;

		}else{

			$(this).next().css('display','block')

		}
 	

})

//邮政编码

$('.paycfm_peryoubian').blur(function(){
	//alert(1)
	var $email = $('input[name=postalcode]').val();
	//console.log($adder)

	var $pattern  = /[1-9]\d{5}(?!\d)/g;

	if($pattern.test($email)){

			isMail = true;

		}else{

			$(this).next().css('display','block')

		}
 	

})


//手机号码   固定号码


$('.paycfm_perphone').blur(function(){
	//alert(1)
	var $phone = $('input[name=mobile]').val();
	//console.log($adder)

	var $pattern  = /^1(39|38|30|31|33|86|70|55|87|81|82|83|84|85|88|89)\d{8}$/g;

	if($pattern.test($phone)){

			isPhone = true;

		}else{

			$(this).next().next().next().next().css('display','block')

		}


	})


	//判断邮箱


	$('.paycfm_peremail').blur(function(){
	//alert(1)
	var $email = $('input[name=email]').val();
	//console.log($email)

	var $pattern  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/g;

	if($pattern.test($email)){

			isEmail = true;

		}else{

			$(this).next().css('display','block')

		}



 	

})



//点击保存提交
	$('.paycfm_savebtn').children().click(function(){
		//alert(1)  //ww

		if(isName == true && isAdress == true && isDress == true && isEmail == true && isPhone == true && isMail == true)

			var $name = $('input[name=receiver_name]').val();

			var $adder = $('input[name=street]').val();

			var $email = $('input[name=postalcode]').val();

			var $phone = $('input[name=mobile]').val();

			var $email = $('input[name=email]').val();


			$.cookie('name',$name)
			$.cookie('adder',$adder)
			$.cookie('email',$email)
			$.cookie('phone',$phone)
			$.cookie('email',$email)

			$('.paycfm_addname').html($name);
			$('.paycfm_addphone').html($phone);
			$('.paycfm_addcont').html($email);
			$('.paycfm_addyoubian').html($adder);


			$('.adderlist').css('display','none');
			$('.adder').css('display','block')

	})

	//生成之后的删除按钮

	$('.paycfm_adddel').click(function(){
		//alert(1)
		$('.paycfm_addresslist').css('display','none')

	})





})