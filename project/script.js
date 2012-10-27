$(document).ready(function() {
	
	//navigation
	$('.topmenu li').hover(function() {
		
		navid = $(this).prop('id');
		
		$('#sub'+navid).slideDown(250);
		}, function() {
			$('#sub'+navid).stop(true,true).slideUp(0);
			
			if (navid != $(this).prop('id')) {
				$('.submenu').stop(true,true).slideUp(250);
				$('.subsubmenu').stop(true,true).slideUp(0)};
			});
	
	//database tabs on actual units
	$('.tabs li').click(function() {
		if (! $(this).hasClass('selected')) {
			$('.tabs li').removeClass('selected');
			$(this).addClass('selected');
		}
		
		tabid = $(this).prop('id');
		
		$('.dbpage').css('display', 'none');
		$('#db'+tabid).stop(true,true).fadeIn(850);
		});
	
	//lore tabs for multiple subgroups
	$('.loretabs li').click(function() {
		
		loreulid = $(this).parent('ul').prop('id');
		
		if (! $(this).hasClass('selected')) {
			$('#'+loreulid+' li').removeClass('selected');
			$(this).addClass('selected');
		}
		
		loretabid = $(this).prop('id');
		loretabpage = $(this).parents('.dbpage').prop('id');
		
		$('#'+loretabpage+' .dblorepage').css('display', 'none');
		$('#db'+loretabid).stop(true,true).fadeIn(850);
		});
		
	
	
	//database table animation
	$('.dbdropdown').click(function() {
		
		dropdownid = $(this).prop('id');
		
		$('#table'+dropdownid).stop(true,true).toggle(750);
		});
});