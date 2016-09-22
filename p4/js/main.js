$(document).ready(function(){


	$("#font_color").on ('change', function(e){
		$('.mas').css({'color':$(this).val ()});
	
	})

	$("#font-size").on ('change', function(e){

		$('.mas').css({'font-size': $(this).val() + "px"});	
	});


	$("#font-family").on ('change', function(e){

		$('.mas').css({'font-family': $(this).val()});	
	});





	$("#font-family").change(function() {
    //alert($(this).val());
    $('.changeMe').css("font-family", $(this).val());

});


	$('.content:not(.focus)').keyup(function(){					
								
								
    var value = $(this).val();
    var contentAttr = $(this).attr('name');
    
    $('.'+contentAttr+'').html(value);
    
})

});