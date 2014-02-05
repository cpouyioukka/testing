$(document).ready(function(){
	var request =
	$.getJSON(window.location.origin + "/locations/getAllLocations/", function(data){
		var locations = $(".spot-location");
		$.each(data.locations, function(key, value) {
			locations.append($("<option />").val(key).text(value));
		});
	});
	
	$(".spot-location").on('change', function(){
		updateSpotLocation(
			// SPOT ID GOES HERE, 
			$(this).val()
		);
	});
	
});

function updateSpotLocation(id, newlocationid){
	var request =
	$.ajax(window.location.origin + "/spots/getCurrentSpots/",
	{
		type: "POST",
		data:
		{
			spotId: id,
			locationId: newlocationid
		},
		dataType: "JSON"
	});
}