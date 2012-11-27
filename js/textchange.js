

	$homebutton=$('#home-button');
	$panel=$('#panel');
	
	$homebutton.click(function() {
		$about.fadeOut('slow',function(){
			$home.fadeIn();
		});
	});
	

	
	/*
	$homebutton.click(function(){
		$about.hide('slow');
		$home.delay(700).show('slow');
	});
	*/

$(document).ready(function(){
	$home=$('#home');
	$about=$('#about_trigger');
	$aboutpage=$('#about');
	
	$about.click(function() {
		$home.fadeOut('slow',function(){
			$aboutpage.fadeIn();
		});
	});
});
	