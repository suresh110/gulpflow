var $ = require('jquery');

$(function(){
	$('p').on('click', function(){
		$(this).css('background-color', 'orange');
	});
});