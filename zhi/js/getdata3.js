$(function(){
//获取data3中的数据
//alert(1)  //ww
getMey(6);

function getMey(num){

	 $.ajax({

	 	url:"json/data3.json",

	 	type:"GET",

	 	success:function(res){
	 	//	console.log(res);  //ww
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
		 			//console.log(res)

		 			html += '<li style="border:none;padding:0;width:660px;margin-bottom:18px;"><div class="dpuser_cont_photo">	<p class="dpuser_cphoto_img"><img src="'+res[i].url+'"></p><p class="dpuser_cphoto_txtell" style="text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">'+res[i].tip+'</p></div><div class="dpuser_cont_info"><div class="dpuser_coninfo_timer"><span style="float:left;color:#000;font-size:12px;">评分：</span><span class="ctimer_scoregoods" style="float:left;"></span><span class="dpuser_ctimer_timer"style="float:right;color: #c4c4c4;font -size:12px;" >'+res[i].cont.time1+'</span></div><div class="dpuser_coninfo_cont"><p style="padding-left:15px;color:#000;line-height:0.6;font-size:12px;">'+res[i].cont.details+'</p></div><div class="dpuser_coninfo_zan"><p class="yizan" style="margin-top:-5px;"><span style="font-size:12px;color:#000;">赞</span><i>（'+res[i].zan.num+'）</i></p></div></div></li>'  
										
								
		 		}


		 		html += '</ul>';
		 		//console.log(html)

		 		$('.pro_usercomment').find('.dpuser_cont').html(html);
		 	}

	 	})

        }


	 })

}


})