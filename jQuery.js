// JavaScript Document
$(document).ready(function() {
	 Nav();
	 Login();
	
});

//二级菜单
function Nav(){

	//关于协会
    $('.nav_li1').mouseover(function(){
	   $('.second1').show();
	});
    $('.nav_li1').mouseout(function(){
	   $('.second1').hide();
	});
	//服务大厅
	$('.nav_li5').mouseover(function(){
	   $('.second2').show();
	});
    $('.nav_li5').mouseout(function(){
	   $('.second2').hide();
	});
//服务大厅三级菜单
	 //信息查询
	$('.second2_li1').mouseover(function(){
	   $('.third1').show();
	});
    $('.second2_li1').mouseout(function(){
	   $('.third1').hide();
	});
		
	//协会服务
	$('.second2_li2').mouseover(function(){
	   $('.third2').show();
	});
    $('.second2_li2').mouseout(function(){
	   $('.third2').hide();
	});
		  
    //会员中心
	$('.nav_li6').mouseover(function(){
	   $('.second3').show();
	});
    $('.nav_li6').mouseout(function(){
	   $('.second3').hide();
	});
}

//登录框
function Login(){

	$('.login').click(function () {
		$('#login').show();
	});
	$('.close').click(function(){$('#login').hide()});
}
// 首页
function HomePage(){
    //友情链接
	$('.link_list1').mouseover(function(){
	   $('.link_second1').show();
	});
    $('.link_list1').mouseout(function(){
	   $('.link_second1').hide();
	});
	
	$('.link_list2').mouseover(function(){
	   $('.link_second2').show();
	});
    $('.link_list2').mouseout(function(){
	   $('.link_second2').hide();
	});
	
	$('.link_list3').mouseover(function(){
	   $('.link_second3').show();
	});
    $('.link_list3').mouseout(function(){
	   $('.link_second3').hide();
	});
	
	$('.link_list4').mouseover(function(){
	   $('.link_second4').show();
	});
    $('.link_list4').mouseout(function(){
	   $('.link_second4').hide();
	});
	
	
	//首页  政策法规和行业动态
	$('.news_first1').mouseover(function(){
	   $('.news_second1').show();
	});
    $('.news_first1').mouseout(function(){
	   
	});

	$('.news_first2').mouseover(function(){
	   $('.news_second2').show();
	});
    $('.news_first2').mouseout(function(){
	   $('.news_second2').hide();
	});
	   
}