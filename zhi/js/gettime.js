$(function(){


	//主活动倒计时页上的时间
	//alert(1)  //ww
	function  showTime(){
		var d1 = new Date("2016/09/25");
		var d2 = new Date();
		var diff = d1.getTime() - d2.getTime();
		var diffday = Math.floor(diff / (1000 * 60 * 60 * 24));
		var diffhours = Math.floor(diff / (1000 * 60 * 60));
		var diffminus = Math.floor(diff / (1000 * 60 ));
		var diffseconds = Math.floor(diff / 1000);

		//console.log(diffday+":"+diffhours+":"+diffminus+":"+diffseconds)

		$('.day').html(diffday);
		$('.hours').html(diffhours);
		$('.minus').html(diffminus);
		$('.seconds').html(diffseconds);
		

		//alert(1)	
	}

	setInterval(showTime,1000);

	



})