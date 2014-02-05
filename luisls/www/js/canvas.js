var stage;
var layer = new Kinetic.Layer();
var json;

$(function () {
	stage = new Kinetic.Stage({
        container: "floorPlan",
		width: $("#floorPlan").width(),
		height: $("#floorPlan").height()
    });
	
    $('#squareSmall').click(function(event){
        makeSquareSmall();
		createText();
    });
	
	 $('#squareMedium').click(function(event){
        makeSquareMedium();
    });
	
	 $('#squareLarge').click(function(event){
        makeSquareLarge();
    });
	
	$('#rectSmall').click(function(event){
        makeRectSmall();
    });
	
	$('#rectMedium').click(function(event){
        makeRectMedium();
    });
	
	$('#rectLarge').click(function(event){
        makeRectLarge();
    });
	
	$('#rectHorSmall').click(function(event){
        makeRectHorSmall();
    });
	
	$('#rectHorMedium').click(function(event){
        makeRectHorMedium();
    });
	
	$('#rectHorLarge').click(function(event){
        makeRectHorLarge();
    });
	
	$('#save').click(function(event){
		json = stage.toJSON();
		console.log(json);
		var request =
		$.ajax(window.location.origin + "/layoutPositions/savepositions/",
		{
			type: "POST",
			data:
			{
				json : json,
			},
			dataType: "JSON"
		});
    });
	
	$('#clear').click(function(event){
		stage.clear();
    });
	
	$('#load').click(function(event){
		stage = Kinetic.Node.create(json, 'floorPlan');
		stage.draw();
    });
	
	layer.on('click', function(event) {
		var shape = event.targetNode;
		console.log(shape);
		//shape.remove();
		layer.draw();	
	});
	
	var initialScale = stage.scale(); 
	var initialWidth = $("#floorPlan").width(); 	
	var initialHeight = $("#floorPlan").height(); 

	window.onresize = function(event) { 
		var width = $("#floorPlan").width();
		var height = $("#floorPlan").height();
		var xScale =  (width  / initialWidth) * initialScale.x;  
		var yScale = (height / initialHeight) * initialScale.y;
		var newScale = {x: xScale, y: yScale};
		stage.setAttr('width', width);
		stage.setAttr('height', height);    
		stage.setAttr('scale', newScale ); 
		stage.draw();	
	}
});

function createText(){
	
}

function makeSquareSmall() {

    var squareSmall = new Kinetic.Rect({
        width: 70,
        height: 70,
        fill: 'F5F5F5',
        stroke: 'black'
    });
	
	var text = new Kinetic.Text({
		x: squareSmall.getX(),
		y: squareSmall.getY(),
		text: 'bullshit',
		fontSize: 20,
		fontFamily: 'Calibri',
		width: squareSmall.getWidth(),
		align: 'center',
		fill: 'black',
	});
	
	var group = new Kinetic.Group({
		draggable: true
	});

	group.add(squareSmall);
	group.add(text);
	layer.add(group);
	stage.add(layer); 
}

function makeSquareMedium() {

    var squareMedium = new Kinetic.Rect({
        width: 90,
        height: 90,
        fill: 'F5F5F5',
        stroke: 'black',
		draggable:true
    });
	
	layer.add(squareMedium);
	stage.add(layer); 
}

function makeSquareLarge() {

    var squareLarge = new Kinetic.Rect({
        width: 110,
        height: 110,
        fill: 'F5F5F5',
        stroke: 'black',
		draggable:true
    });
	
	layer.add(squareLarge);
	stage.add(layer); 
}

function makeRectSmall() {

    var rectSmall = new Kinetic.Rect({
        width: 50,
        height: 90,
        fill: 'F5F5F5',
        stroke: 'black',
		draggable:true
    });
	
	layer.add(rectSmall);
	stage.add(layer); 
}

function makeRectMedium() {

    var rectMedium = new Kinetic.Rect({
        width: 70,
        height: 110,
        fill: 'F5F5F5',
        stroke: 'black',
		draggable:true
    });
	
	layer.add(rectMedium);
	stage.add(layer); 
}

function makeRectLarge() {

    var rectLarge = new Kinetic.Rect({
        width: 90,
        height: 150,
        fill: 'F5F5F5',
        stroke: 'black',
		draggable:true
    });
	
	layer.add(rectLarge);
	stage.add(layer); 
}

function makeRectHorSmall() {

    var rectHorSmall = new Kinetic.Rect({
        width: 90,
        height: 50,
        fill: 'F5F5F5',
        stroke: 'black',
		draggable:true
    });
	
	layer.add(rectHorSmall);
	stage.add(layer); 
}

function makeRectHorMedium() {

    var rectHorMedium = new Kinetic.Rect({
        width: 110,
        height: 70,
        fill: 'F5F5F5',
        stroke: 'black',
		draggable:true
    });
	
	layer.add(rectHorMedium);
	stage.add(layer); 
}

function makeRectHorLarge() {

    var rectHorLarge = new Kinetic.Rect({
        width: 150,
        height: 90,
        fill: 'F5F5F5',
        stroke: 'black',
		draggable:true
    });
	
	layer.add(rectHorLarge);
	stage.add(layer); 
}