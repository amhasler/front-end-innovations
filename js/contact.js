$(document).ready(function(){
	$contactButton=$('.contact_trigger');
	$contactPage=$('#contact');
	$submit=$('#submit');
	$confirmation=$('#confirmation');
	$contactText=$('#contact-text');

	$contactButton.click(function() {
		$contactPage.lightbox_me();
	});
	
	$submit.click(function() {
		$contactText.fadeOut(function(){
			$confirmation.fadeIn(function(){
				$contactPage.delay(7000).trigger('close');
			});
		});
	});
});

$(document).ready(function(){
	$(function() {
    $( "#accordion" ).accordion({
        collapsible: true,
				header: ".topline-issue-info",
				clearStyle: true
    });
	});
});