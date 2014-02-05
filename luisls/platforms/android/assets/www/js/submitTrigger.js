$(document).ready(function(){

	$('#trigger-form').on('submit', function(e){
		console.log($(this).serialize());
		e.preventDefault();
		var request = $.ajax({
		   type: "POST",
		   url: window.location.origin + "/triggers/saveTrigger",
		   data: $('#trigger-form').serialize()
		});
	});

});