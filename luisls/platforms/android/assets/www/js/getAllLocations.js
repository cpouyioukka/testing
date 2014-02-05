$(document).ready(function(){

	var request =
	$.getJSON(window.location.origin + "/locations/getAllLocations/", function(data){
		var options = $("#location");
		$.each(data.locations, function(key, value) {
			options.append($("<option />").val(key).text(value));
		});
	});

});

