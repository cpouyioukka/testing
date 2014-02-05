 var myVar=setInterval(function(){myTimer()},1000);

function myTimer()
{
	getSpotStatuses();
}
function getSpotStatuses(){
  var request =
  $.ajax(window.location.origin + "/spots/getCurrentSpots/",
  {
    type: "POST",
    dataType: "JSON"
  });
  request.done(function(data){
    generateStatusPanel(data.spots);
  });
}
function generateStatusPanel(spotStatuses){
	var rowNum = spotStatuses.spot.length / 4;
	var htmlString;
	var appstring;
	var labelstring;
	for(var i = 0; i < spotStatuses.spot.length; i++){
		appstring = '';
		if((i % 4) == 0){
			htmlString = htmlString + '<div class = "row">';
		}
		if(spotStatuses.spot[i].length == 2){
			for(var j = 0; j < spotStatuses.Spot[i].Application.length; j++){
				appstring = appstring + spotStatuses.Spot[i].Application[j]["name"];
			}
		}
		if(spotStatuses.spot[i].Spot["status"] == 1){
			labelstring = 'success';
		}
		else{
			labelstring = 'danger';
		}
		htmlString = htmlString + '<div class = "col-md-3">' + 
			'<h4><a href = "#">' 
			+ spotStatuses.spot[i].Spot.address +
			'</a></h4><div class="row"><div class="panel panel-default">' +
			'<div class="panel-heading"><h3 class="panel-title"><span class="label label-'
			+ labelstring +'">' +
			spotStatuses.spot[i].Spot.battery_percent +
			'%</span></h3>' + 
			'</div><div class="panel-body">' + 
			appstring + '</div></div></div></div>';
		if(((i % 4) == 3)||(i == spotStatuses.spotcount)){
			htmlString = htmlString + '</div>';
		}
	}
	$("#contain").html(htmlString);
}