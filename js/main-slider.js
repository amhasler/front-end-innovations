var ANIMATION_LENGTH = 700;

$(document).ready(function(){
	$panel = $('#main_content');
	$trigger =$('.trigger');
	$slickbox = $('#issue-list');
	$toplist = $('#issues-toc');
	$blogBox = $('#blog-list');
	$home=$('#home');
	$about=$('.about_trigger');
	$aboutpage=$('#about');
	$homeTrigger=$('.homeTrigger');

	$about.click(function() {
		$home.fadeOut('slow',function(){
			$aboutpage.fadeIn();
		});
	});
	
	$homeTrigger.click(function() {
		$aboutpage.fadeOut('slow',function(){
			$home.fadeIn();
		});
	});
	
	$('.trigger').click(function(e){
		var isLeft = $panel.css('left')==="20px";
		var newLeft = (isLeft) ? "30%" : "20px";
		var delayAmount = 700;
		var idClicked = e.target.id;
		

		if (newLeft==="30%") {
			if ( idClicked==="main"||idClicked==="browse-issues"||idClicked==="innovations-top"||idClicked==="innovations-bottom"||idClicked==="amplify-top"||idClicked==="amplify-bottom"&&$blogBox.css("display")!=="block") {
				console.log(idClicked);
				$toplist.fadeOut('slow');
				$slickbox.hide('slow');
			} else if ( idClicked==="main2"||idClicked==="browse-blog"||idClicked==="innovations-top"||idClicked==="innovations-bottom"||idClicked==="amplify-top"||idClicked==="amplify-bottom"&&$slickbox.css('display')!=='block'&&idClicked!=="browse-issues") {
				console.log(idClicked);
				$blogBox.hide('slow');
			} else if ($slickbox.css('display')==='block'&&idClicked==="browse-blog") {
					$slickbox.hide('slow');
					$blogBox.show('slow');
					return false;
			} else if ($blogBox.css('display')==='block'&&idClicked==="browse-issues") {
				$blogBox.hide('slow');
				$slickbox.show('slow');
				$toplist.fadeIn('slow');
				return false;
			}
		} else if (newLeft==="20px"){
			if (idClicked==="browse-issues") {
				$slickbox.show('slow');
				$toplist.fadeIn('slow');
			} else if (idClicked==="browse-blog") {
				$blogBox.show('slow');
			}
		} else if (blogBox.css('display')==='none'&&slickbox.css('display')==='none') {
			return false;
		}

		$panel.animate({'left': newLeft},ANIMATION_LENGTH);

	});
});