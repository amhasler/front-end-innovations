var ANIMATION_LENGTH = 700;

$(document).ready(function(){
	$panel = $('#main_content');
	$tab = $('#browse-issues');
	$slickbox = $('#issue-list');
	
	$tab.click(function(){
	
	console.log('element clicked');
	console.log($panel.css('left'));
	//Create a variable call isShown to find the state of $panel
	var isLeft = $panel.css('left')==="20px";
	
	//Create another variable NewTop. Using a ternary operator, check the
	//of isShown. It if it is true, then assign the value of -180px.
	//If false, set the value to be 0px;
	/*
	if (isLeft==='30%') {
		newLeft = "20px";		
	} else {
		newLeft = "30%";
	}
	*/
	
	var newLeft = (isLeft) ? "30%" : "20px";
	
	/*
	if (newLeft==="30%") {
		$slickbox.hide('slow');
	} else if (newLeft==="20px"){
		$slickbox.show('slow');
	}
	*/
	
	
	$panel.animate({'left': newLeft},ANIMATION_LENGTH);
	
	
	});
});
