var main = function () {
  "use strict";
  $(".l1").on("click", function () {
	  $('.s1').addClass('zichtbaar');
	  $('.s2').removeClass('zichtbaar');
	  $('.s3').removeClass('zichtbaar');
	  $('.s4').removeClass('zichtbaar');
  });
  
  $(".l2").on("click", function () {
	 $('.s2').addClass('zichtbaar'); 
	 $('.s1').removeClass('zichtbaar');
	 $('.s3').removeClass('zichtbaar');
	 $('.s4').removeClass('zichtbaar');
  });
  
  $(".l3").on("click", function () {
	  $('.s3').addClass('zichtbaar');
	  $('.s1').removeClass('zichtbaar');
	  $('.s2').removeClass('zichtbaar');
	  $('.s4').removeClass('zichtbaar');
  });
  
   $(".l5").on("click", function () {
	  $('.s4').addClass('zichtbaar');
	  $('.s1').removeClass('zichtbaar');
	  $('.s2').removeClass('zichtbaar');
  });
  
   $(".volgende1").on("click", function () {
		 $(".ss1").removeClass("zichtbaar");
	       $(".ss2").addClass("zichtbaar");
	});
	
    $(".volgende2").on("click", function () {
		 $(".ss2").removeClass("zichtbaar");
	       $(".ss3").addClass("zichtbaar");
	});	
	
	 $(".volgende3").on("click", function () {
		 $(".ss3").removeClass("zichtbaar");
	       $(".ss1").addClass("zichtbaar");
	});	
		 
}

$("document").ready(main);