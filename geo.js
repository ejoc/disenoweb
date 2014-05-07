var geo = navigator.geolocation;
var opciones= {};

function geo_error () {
	console.log("No puedo saber dond estas");
}

function geo_exito(position){
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	var mapa = new Image();
	mapa.src = "http://maps.googleapis.com/maps/api/staticmap?zoom=13&size=300x300&sensor=false&center="+lat+","+lon;
	$('#geo').append(mapa);
}

geo.getCurrentPosition(geo_exito, geo_error, opciones);