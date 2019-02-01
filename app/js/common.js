$(function () {

	var slider = $('.slider').slick({
		arrows: false
	})

	$('.nav-next').on('click', function () {
		$(slider).slick('slickNext');
	});

	$('.nav-prev').on('click', function () {
		$(slider).slick('slickPrev');
	});

	$('.product-item__slider').slider({
		range: "min",
		value: 0,
		min: 0,
		max: 99,
		slide: function( event, ui ) {
			$( "#amount" ).val( ui.value + " см" );
		}
	});
	$( "#amount" ).val( $( ".product-item__slider").slider( "value" ) + " см" );

	$('.product-item__slider1').slider({
		range: "min",
		value: 0,
		min: 0,
		max: 99,
		slide: function( event, ui ) {
			$( "#amount1" ).val( ui.value + " см" );
		}
	});
	$( "#amount1" ).val( $( ".product-item__slider1").slider( "value" ) + " см" );

	$('.product-item__slider2').slider({
		range: "min",
		value: 0,
		min: 0,
		max: 99,
		slide: function( event, ui ) {
			$( "#amount2" ).val( ui.value + " см" );
		}
	});
	$( "#amount2" ).val( $( ".product-item__slider2").slider( "value" ) + " см" );

	$('.product-item__slider3').slider({
		range: "min",
		value: 0,
		min: 0,
		max: 99,
		slide: function( event, ui ) {
			$( "#amount3" ).val( ui.value + " см" );
		}
	});
	$( "#amount3" ).val( $( ".product-item__slider3").slider( "value" ) + " см" );

	
	$('.product-item__slider4').slider({
		range: "min",
		value: 0,
		min: 0,
		max: 99,
		slide: function( event, ui ) {
			$( "#amount4" ).val( ui.value + " см" );
		}
	});
	$( "#amount4" ).val( $( ".product-item__slider4").slider( "value" ) + " см" );

	$('.product-item__slider5').slider({
		range: "min",
		value: 0,
		min: 0,
		max: 99,
		slide: function( event, ui ) {
			$( "#amount5" ).val( ui.value + " см" );
		}
	});
	$( "#amount5" ).val( $( ".product-item__slider5").slider( "value" ) + " см" );

	$('.product-item__slider6').slider({
		range: "min",
		value: 0,
		min: 0,
		max: 99,
		slide: function( event, ui ) {
			$( "#amount6" ).val( ui.value + " см" );
		}
	});
	$( "#amount6" ).val( $( ".product-item__slider6").slider( "value" ) + " см" );

	$('.product-item__slider7').slider({
		range: "min",
		value: 0,
		min: 0,
		max: 99,
		slide: function( event, ui ) {
			$( "#amount7" ).val( ui.value + " см" );
		}
	});
	$( "#amount7" ).val( $( ".product-item__slider7").slider( "value" ) + " см" );

	$('.product-item__slider8').slider({
		range: "min",
		value: 0,
		min: 0,
		max: 99,
		slide: function( event, ui ) {
			$( "#amount8" ).val( ui.value + " см" );
		}
	});
	$( "#amount8" ).val( $( ".product-item__slider8").slider( "value" ) + " см" );

	$('.product-item__content').on('click', function(){
		$(this).parent().children('.product-item__img').slideToggle(300)
	})

});


