var ANIMATION_LENGTH = 700;

$(document).ready(function(){
	$slickbox = $('#slickbox');
	$tab = $('#tab');
	
	$tab.click(function(){
	
	//Create a variable call isShown to find the state of $panel
		$slickbox.toggle("slow");
	
	//Create another variable NewTop. Using a ternary operator, check the
	//of isShown. It if it is true, then assign the value of -180px.
	//If false, set the value to be 0px;
	//var newLeft = (isLeft) ? "30%" : "20px";
	
	/*
	if (isLeft==="30%)") {
		var newLeft = "20px";
	} else {
		var newLeft = "30%";
	}
	
	$panel.animate({'left': newLeft},ANIMATION_LENGTH);
	
	*/
	});
});