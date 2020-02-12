$(function(){
	var n=0 // 메뉴 번호 변수
	var t=0; // 윈도우 상단 좌표 변수
	var firstFlag = false;

	setTimeout(function(){
		$("html").animate({scrollTop : 0}, 800, function(){
			firstFlag= true;
			$(window).trigger("scroll")
		})
	}, 10);

	// 윈도우 상단 좌표가 80px보다 커지면 .fixed_nav에 show 클래스 추가
	$(window).scroll(function(){
		t=$(window).scrollTop();
		if(firstFlag == false){
			return;
		}

		if(t > 80){
			$(".fixed_nav").addClass("show"); // top 0
		}
		else{
			$(".fixed_nav").removeClass("show");
		}

		if(t < $("#business").offset().top-200){ //두 번째 카테고리보다 좌표가 낮으면, 첫 번째 카테고리
			n=0;
		}
		else if(t < $("#portfolio").offset().top-200){
			n=1;
		}
		else if(t < $("#about").offset().top-200){
			n=2;
		}
		else if (t < $("#team").offset().top-200) {
			n=3;
		}
		else if(t < $("#contact").offset().top-200){
			n=4;
			if(t == $(document).height()-$(window).height()){
				n=5;
			}
		}
		else{
			n=5;
		}
		//console.log(n);

		$("#header").removeClass("active");
		$("#header").eq(n).addClass("active");
		$(".navi li").removeClass("on");
		$(".navi li").eq(n).addClass("on");
		$(".fixed_nav li").removeClass("on");
		$(".fixed_nav li").eq(n).addClass("on");
		$("section").eq(n).addClass("active");
		console.log(n);
	});


	$(window).trigger("scroll"); // 강제로 한 번 실행

	var targety=0; // 목표 위치 변수
	$("#GNB li, .fixed_nav li, .navi li").click(function(e){
		e.preventDefault();

		n=$(this).index(); // 번호를 얻고자 할 때
		// console.log("click n : "+n);

		targety=$("section").eq(n).offset().top; // 높이수치 ,상단좌표를 얻음, .offset().top ->top값의 위치값.
		console.log(targety);

		$("html").animate({"scrollTop" : targety}, 800);

		// 위로 가기 버튼
		// $("html").animate({"scrollTop" : 0}, 800);
	});

	// top 버튼
	var timer;
	var t;

	$(window).scroll(function(){
		clearTimeout(timer);

		timer=setTimeout(function(){
			t=$(window).scrollTop();

			if(t > 80){
				if($(".go_top").css("display") == "none"){
					$(".go_top").fadeIn(300);
				}
			}
			else{
				if($(".go_top").css("display") == "block"){
					$(".go_top").fadeOut(300);
				}
			}
		}, 150);
	});
	//$(window).trigger("scroll");

	$(".go_top").click(function(e){
		e.preventDefault();
		$("html").animate({scrollTop:0}, 800, function(){
			$(".go_top").fadeOut(300);
		});
	});
});
