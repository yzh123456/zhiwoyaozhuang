$(function(){
//alert(1)  // ww
//左右的点击事件
//左边  当前的显示
var index = 0;
$('.marque_leftbtn').click(function(){
	//alert(1) // ww
	fn2();
	

})
//右边
$('.marque_rightbtn').click(function(){
	//alert(1) // ww
	fn1();
	

})

//上面导航菜单的划入划出
$('.marque_inner').children().mouseover(function(){
	//alert(1);  //ww
	var $cont_page = $('.marque_cont').children();
	if(index == $cont_page.length-1 ){
		index=0;
	}else{
		index ++;
	}

	
	//console.log($(this).index())  /ww
	$cont_page.eq($(this).index()).stop().show().siblings().stop().hide();
	$('.marque_inner').children().eq($(this).index()).addClass('marque_current').siblings().removeClass('marque_current');


})
function fn1(){
	//左边的点击事件
	
	//console.log($('.marque_cont').children())
	var $cont_page = $('.marque_cont').children();
	if(index == $cont_page.length-1 ){
		index=0;
	}else{
		index ++;
	}
	$cont_page.eq(index).stop().show().siblings().stop().hide();

	//上面的导航
	$('.marque_inner').children().eq(index).addClass('marque_current').siblings().removeClass('marque_current');



}

function fn2(){
	//右边的点击事件
	
	//console.log($('.marque_cont').children())
	$cont_page = $('.marque_cont').children();
	if(index == 0 ){
		index=$cont_page.length-1;
	}else{
		index --;
	}
	$cont_page.eq(index).stop().show().siblings().stop().hide();

	//导航
	$('.marque_inner').children().eq(index).addClass('marque_current').siblings().removeClass('marque_current');




}







})