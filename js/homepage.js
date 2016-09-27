$(document).ready(function(){
//	$('#mytab').tab('show');
    $('.tabs a:last').tab('show');
//  $('.carousel').carousel({  interval: 2000});
    $(window).resize(function() { 
      if($(window).width()<1180){
        $(".open").css({"display":"none"});
      }
      if($(window).width()>=1180){
    	$(".open").css("display","block");
      }
      if($(window).width()<900){
    	$(".editor").css("display","none");
      }
      if($(window).width()>=900){
    	$(".editor").css("display","block");
      }
      if($(window).width()<700){
    	$(".time").css("display","none");
    	$(".alink").css("width","100%");
//  	$(".widget").css("font-size","10px")
        
      }
      if($(window).width()>=700){
    	$(".time").css("display","block");
    	$(".alink").css("width","48%");
      }
      
      
    });
});
