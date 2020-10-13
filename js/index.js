$(document).ready (function () {

	$(".all").removeClass("bg");
	$('#imgDIV').hide();
	$(".maniac").removeClass("shake");

	$(".maniac").on ("click",function(){
		$(".maniac").css ("color","red");
		$(".maniac").addClass("shake");
		$(".all").addClass("bg");
		$(".btnBox").css("top","45%");
		$(".text").css ("color","white");

		$('#imgDIV').show();

	});

	$(".maniac").on ("dblclick", function(){
		$(".maniac").css ("color","lightgray");
		$(".maniac").removeClass("shake");
		$(".all").removeClass("bg");
		$(".btnBox").css("top","42%");
		$(".text").css ("color","gray");

		$('#imgDIV').hide();
	})

})