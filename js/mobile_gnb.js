$(function(){
	$(".wrapper .tab1").click(function(e){
		e.preventDefault();
		$("#mobile_gnb").addClass("active");
	});

	$(".wrapper .tab2").click(function(e){
		e.preventDefault();
		$("#mobile_gnb").removeClass("active");
	});
});
