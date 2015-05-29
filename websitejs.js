var main = function () {
  "use strict";
  
  setInterval(function () {
       if ($(".profiel").hasClass("zichtbaar")){
			   $(".profiel").fadeOut(3000, function(){		
			     $(".profiel2").fadeIn(3000, function () {
				  $(".profiel").removeClass("zichtbaar");
					$(".profiel2").addClass("zichtbaar");
			   });	
	          });
		    } 
		   
		   else if ($(".profiel2").hasClass("zichtbaar")){
			   $(".profiel2").fadeOut(3000, function(){
			        $(".profiel3").fadeIn(3000, function (){
					 $(".profiel2").removeClass("zichtbaar");
	                   $(".profiel3").addClass("zichtbaar");	
					});
	          });
		    }
		    
		    else if ($(".profiel3").hasClass("zichtbaar")){
			   $(".profiel3").fadeOut(3000, function(){
			        $(".profiel4").fadeIn(3000, function (){
					 $(".profiel3").removeClass("zichtbaar");
	                   $(".profiel4").addClass("zichtbaar");	
					});
	          });
		    }
		    
		    else if ($(".profiel4").hasClass("zichtbaar")){
			   $(".profiel4").fadeOut(3000, function(){
			        $(".profiel5").fadeIn(3000, function (){
					 $(".profiel4").removeClass("zichtbaar");
	                   $(".profiel5").addClass("zichtbaar");	
					});
	          });
		    }
		    
		    else if ($(".profiel5").hasClass("zichtbaar")){
			   $(".profiel5").fadeOut(3000, function(){
			        $(".profiel6").fadeIn(3000, function (){
					 $(".profiel5").removeClass("zichtbaar");
	                   $(".profiel6").addClass("zichtbaar");	
					});
	          });
		    }
		    
		   
		   else{
			   $(".profiel6").fadeOut(3000, function(){
				  $(".profiel").fadeIn(3000, function (){
		            $(".profiel6").removeClass("zichtbaar");
	                  $(".profiel").addClass("zichtbaar");
				  });
	          });
		    }
	 
    }, 5000);
  
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
	  $('.s3').removeClass('zichtbaar');
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