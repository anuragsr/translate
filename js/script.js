$(document).ready(function(){
	$(".main-btn").on("mouseenter", function(){
		TweenMax.to(this, 0.5, {backgroundColor:"rgba(255,61,46,0.7)", boxShadow:"0px 0px 10px 0px #fff"});
	});
	$(".main-btn").on("mouseleave", function(){
		TweenMax.to(this, 0.5, {backgroundColor:"rgba(255,61,46,1)", boxShadow:"0px 0px 0px 0px #fff"});
	});
	$("a.link").on("mouseenter", function(){
		TweenMax.to(this, 0.5, {color:"rgb(40, 119, 199)"});
	});
	$("a.link").on("mouseleave", function(){
		TweenMax.to(this, 0.5, {color:"#000"});
	});
});