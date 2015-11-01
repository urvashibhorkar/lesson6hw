$(document).ready (function(){
	//in here goes the code that is to be executed
	var shoutHello = function (shoutString){
		alert ('Hello' + 'shoutString' + '')
	}

	$('h1') .animate({
		opacity: 0.25,
		width: "70%"
	}, 3000);

	$('#hide').click(function(){
        $('p').hide();
    });
    $('#show').click(function(){
        $('p').show();
    });
});

$(document).ready(function(){
    $('#tab').click(function(){
        $('#panel').slideDown('slow');
    });
});

$(document).ready(function(){
    $('#tab').click(function(){
      $('#panel').slideUp(6000);
    });
});