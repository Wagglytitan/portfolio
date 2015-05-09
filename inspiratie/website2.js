var main = function () {
  "use strict";
    $(".doctor").on("mouseover", function () {
    	$(".doctor1").css("display","block");
		});
		
		$(".doctor").on("mouseout", function () {
    	$(".doctor1").css("display","none");
    });
	
	$(".nature").on("mouseover", function () {
    	$(".nature1").css("display","block");
    });
	
	$(".nature").on("mouseout", function () {
    	$(".nature1").css("display","none");
    });
	
	$(".space").on("mouseover", function () {
    	$(".space1").css("display","block");
    });
	
	$(".space").on("mouseout", function () {
    	$(".space1").css("display","none");
    });
	
}

$("document").ready(main);