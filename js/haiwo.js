$(function(){
    
	//弹出层
	$(".select-btn").each(function(n){
		
		$(this).click(function(){
			$(".popWrap").eq(n).show();
			})
		
		})
		
	
	//产品配置js切换
	$(".selectBlock").click(function(){
		$(this).addClass("selectActive").parent().siblings(".col-xs-3").find(".selectBlock").removeClass("selectActive");
		})
				  
			  
			
	//收起
   $(".shouqi").each(function(index, element) {
		$(this).click(function(){
		 $(this).parent(".popWrap").hide();
		 var txt= $(this).parent(".popWrap").find(".selectActive").text();
		 $(".select-btn").eq(index).text(txt);
		})
});
	
	
	
	//有无合作
	$(".radio-label").each(function(index, element) {
        $(this).click(function(){
			$(this).addClass("radio-label-on").siblings(".radio-label").removeClass("radio-label-on");
			})
    });
	
	
	//在线报修-图片上传


    $('.file_input').change(function() {
        var file = this.files[0]; //选择上传的文件
        var r = new FileReader();
        r.readAsDataURL(file); //Base64
        $(r).load(function() {
        	$('.imgshow').append('<div clas="imgitem"><span class="remove">删除</span><img src="' + this.result + '" alt="" /></div>');
        	$('.file_input').val('');
        });
    });

    //删除
    $('.imgshow').on('click', '.remove', function(){
    	if(confirm('您真的要删除吗？')){
    		$(this).parent().remove();
    	}else{
    		return
    	}
    	
    
});
	
	})