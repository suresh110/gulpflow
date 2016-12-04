// var $ = require('jquery');

$(function(){
	$('nav ul').children('li').on('click', function(){
		$(this).css('background-color', 'violet');
	});
});