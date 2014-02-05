$(document).ready(function(){
	var request =
	$.getJSON(window.location.origin + "/actuators/getAllActuators/", function(data){
		var options = $(".actuator-list");
		$.each(data.actuators, function(key, value) {
			options.append($("<option />").val(key).text(value));
		});
	});
});