/*============jQ=========*/ 
$(document).ready(function(){
	// ex-01
	$('.hide_btn').on('click', function(){
		$('h3').hide();
	});
	$('.show_btn').on('click', function(){
		$('h3').show();
	});
	$('.toggle_btn').on('click', function(){
		$('h3').toggle();
	})

	// ex-02
	$('.show1_btn').on('click', function(){
		$('.s_h3').toggle("slow");
	});

	// ex-03
	$('.me_alart').on('mouseenter', function(){
		alert("hello");

	});
	
	// ex-04
	$('.h_btn').on('click', function(){
		$('p').hide(1000);
	});

	$('.s_btn').on('click', function(){
		$('p').show(1000);
	});

	// ex-05
	$('.box_btn').on('click', function(){
		$('.red').fadeToggle();
		$('.blue').fadeToggle("slow");
		$('.green').fadeToggle(1000);
	});

	// ex-06
	$('.box_btn2').on('click', function(){
		$('.red2').toggle();
		$('.blue2').toggle("slow");
		$('.green2').toggle(1000);
	});

	// ex-07
	$('.box_btn3').on('click', function(){
		$('.red3').fadeTo("slow", 0.20);
		$('.blue3').fadeTo("slow", 0.40);
		$('.green3').fadeTo("slow", 0.60);
	});
	$('.box_btn4').on('click', function(){
		$('.red3').fadeTo("slow", 1);
		$('.blue3').fadeTo("slow", 1);
		$('.green3').fadeTo("slow", 1);
	});

	// ex-08
	$('.s_up').on('click', function(){
		$('.slidePannel').slideUp("slow")
	});
	$('.s_down').on('click', function(){
		$('.slidePannel').slideDown("slow")
	});
	$('.s_togg').on('click', function(){
		$('.slidePannel').slideToggle("slow")
	});

	// ex-09
	$('.box_ani').on('click', function(){
		$('.red4').animate({ 
			width: "70%",
			opacity: ".5",
		}, "slow" )
	});












})