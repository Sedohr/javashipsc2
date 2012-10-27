$(document).ready(function() {
	$('.topmenu li').mouseenter(function() {
		currentid = $(this).prop('id');
		
		$('#sub'+currentid).slideDown(250);
		});
		
	$('.topmenu li').mouseout(function() {
			$('#sub'+currentid).stop(true,true).slideUp(250);
			});


});