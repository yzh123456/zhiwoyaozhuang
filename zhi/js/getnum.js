$(function(){
	//alert(1)  //ww
	var index  = 0;
	$('.down').click(function(){
		//alert(1)  //ww
		fn2();


	})

	$('.up').click(function(){
		//alert(1)  //ww
		fn1();


	})

	function fn1(){

		if(index == 0){
			index = 1;
		}else{
			index++;
		}
		//console.log(index)
		$('#buy_number').val(index);

		
		//console.log(price)
	}


	function fn2(){

		if(index == 0 || index == 1 ){
			index = 1;
		}
		else{
			index--;
		}

		//console.log(index)
		$('#buy_number').val(index);

		


	}
})