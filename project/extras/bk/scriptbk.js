$(document).ready(function() {
	$('.topmenu li').hover(function() {
		currentid = $(this).prop('id');
		
		$('#sub'+currentid).css('display', 'inline');
		}, function() {
			//$('.submenu li').not('#'+currentid).css('display', 'none');
			$('#sub'+currentid).css('display', 'none');
			});
			
	$('.submenu li').hover(function() {
		subid = $(this).prop('id');
		
		$('#sub'+subid).css('display', 'inline');
		}, function() {
			//$('#sub'+currentid).css('display', 'none');
			$('#sub'+subid).css('display', 'none');
			});
		
});