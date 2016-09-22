$(document).ready(function(){

var contador = 4;

	$(".contenedor").on('click', function(e){
		
		$('ol').append('<li> '+contador+'</li>');
		contador ++;
	});

	$('<li>').on('click', function(e){
		e.stopPropagation();
	}

		)

});