$(function(){
	$('p').on('click', function(){
		$(this).css('background-color', 'orange');
	});
});
$(function(){
	$('nav ul').children('li').on('click', function(){
		$(this).css('background-color', 'violet');
	});
});
$(function(){
	$('h1').on('click', function(){
		$(this).css('background-color', 'green');
	});
});