///////////Creación variable mapa/////////// 
var map = L.map('map', {
		zoomControl: false,
		center: [43.13, -8.2],
		zoom: 10,
		minZoom: 8,
		maxZoom: 12,
		maxBounds: [
			[33, -17],
			[50, 7]
			],
	});




///////////Funcionalidades estructura del visor///////////
//Layers on top
map.createPane('límites');
// This pane is above markers but below popups
map.getPane('límites').style.zIndex = 650;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('límites').style.pointerEvents = 'none';
//Labels on top
map.createPane('labels');
// This pane is above markers but below popups
map.getPane('labels').style.zIndex = 800;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('labels').style.pointerEvents = 'none';
//bindTooltip on top
map.createPane('popups');
// el popup aparece al arrastar encima de todo pero debajo del popup que aparece al clicar
map.getPane('popups').style.zIndex = 1000;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('popups').style.pointerEvents = 'none';
//bindPopup on top
map.createPane('popups1');
// aparece por encima de todas las capas
map.getPane('popups1').style.zIndex = 1500;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('popups1').style.pointerEvents = 'none';
//Barra de interacción de capas	tantaas sildebar como grupos de capas
var sidebar = L.control.sidebar('sidebar', { closeButton:true, position: 'left' });
	map.addControl(sidebar);
	sidebar.hide();			
	sidebar.show();
	sidebar.toggle();
var visible = sidebar.isVisible();
var button = new L.Control.Button(L.DomUtil.get('helpbutton'), { toggleButton: 'active', position: 'topleft'});
	button.addTo(map);
	button.on('click', function () {
	 if (button.isToggled()) {
			sidebar.hide();
		} else {
			sidebar.show();
		}
	});
var sidebar2 = L.control.sidebar('sidebar2', { closeButton:true, position: 'right' });
	map.addControl(sidebar2);
	sidebar2.hide();			
	sidebar2.show();
	sidebar2.toggle();
var visible2 = sidebar.isVisible();

//Buscador
var geocoder = L.Control.geocoder({ position: 'topleft',
	//defaultmarkGeocode: false
	}).addTo(map);


///////////Diseño caracteriticas basicas del visor///////////
//Título
var title2 = L.control({position: 'topright'});
	title2.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info2');
	 div.innerHTML +=
	 'VISOR CARTOGRÁFICO<h2>Cambio climático recente nas parroquias <br> da provincia da Coruña';
	 return div;
	};
	title2.addTo(map);
//Logo Matrix	
var title1 = L.control({position: 'bottomright' });
	title1.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info1');
	 div.innerHTML +=
	 '<a href="https://www.fundacionmatrix.es"><img src="images/matrix0.png" width="200px" height="100px" ></img></a>';
	 return div;
	};
	title1.addTo(map);


		//Logo CLIMACO
var title4 = L.control({position: 'bottomright'});
	title4.onAdd = function (map) {
var div = L.DomUtil.create('div','info4');
	 div.innerHTML +=
	 '<a><img src="images/climaco.png" width="100px" height="100px" ></img></a>';
	 return div;
	};
	title4.addTo(map); 
	





///////////Cartografía de referencia///////////

var Mapa_fondo = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, opacity: 0.4, 
	attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetmap </a>| Map data © 2021 <a href="https://www.fundacionmatrix.es"><strong>@Fundación Matrix 2021</strong></a>',
	}).addTo(map);		
var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: '©OpenStreetmap, ©CartoDB',
    attribution: '| <a href="https://www.fundacionmatrix.es"><strong>@Fundación Matrix 2021</strong></a>'
    });
var positronLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    attribution: '©OpenStreetmap, ©CartoDB',
    pane: 'labels'
    });


var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	opacity: 0.5,
	attribution: 'Map data &copy'
	});
var osm1 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
	opacity: 0,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetmap</a>'
	});
var osm2 = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	minZoom: 0, 
	maxZoom: 13,
	});
var osm3 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, opacity: 0.4, 
	attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetmap </a>',
	});



//Límites
// var comunidades = L.geoJson(comunidades, {
// 	color: "#17202A", 
// 	weight: 1.3,
// 	opacity: 0.5,
// 	fillOpacity: 0,
// 	pane: 'límites', // layer goes on top.
// 	attribution: '| © <a href="http://www.ign.es">Instituto Geográfico Nacional || © <a href="http://www.aemet.es">Agencia Estatal de Meteorología |'			
// 	}).addTo(map);

 

 var relieve = L.imageOverlay('images/hillshade_cor.png',
  imageBounds = [
    [44.009, -9.814],
    [42.312, -7.022]

  ]).addTo(map);

var conce = L.geoJson(conce, {
	color: "#17202A", 
	weight: 1.5,
	opacity: 0.5,
	fillOpacity: 0,
	pane: 'límites', // layer goes on top.
	attribution: '| © <a href="http://www.ign.es">Instituto Geográfico Nacional |'			
	}).addTo(map);

relieve.setOpacity(0.8);


///////////Otras funcionalidades
				
//zoomHome
var zoomHome = L.Control.zoomHome({ position: 'topleft', homeCoordinates:[43.13, -8.7], zoomHomeTitle:'Posición inicial'}).addTo(map);
//fullscreen						
var fsControl = new L.Control.FullScreen();
	map.addControl(fsControl);
	map.on('enterFullscreen', function(){
	if(window.console) window.console.log('enterFullscreen');
	});
	map.on('exitFullscreen', function(){
	if(window.console) window.console.log('exitFullscreen');
	});
	L.control.scale().addTo(map);




    
//MIS MAPAS

//PRIMAVERA
function getColor1(a) {
	
	return a > 1.5? '#862666' :
	a >= 1.4? '#892750':
	a >= 1.3? '#8a273b':
	a >= 1.2? '#8a2827':
	a >= 1.1? '#9c2626':
	a >= 1.0? '#ab2627':
	a >= 0.9? '#bf2726':
	a >= 0.8? '#d52726':
	a >= 0.7? '#f02626':
	a >= 0.6? '#ff553e':
	a >= 0.5? '#ff8361':
	a >= 0.4? '#ffad8b':
	a >= 0.3? '#fec6a3': 
	a >= 0.2? '#ffdab5':
	a >= 0.1? '#feefc8':
	a < 0.1? '#FFEFDB':
	
	'#C25200';
};


function style1(feature) {
	return {
		fillColor: getColor1(feature.properties.camb_temp_est_parroq_cor_visor_min_prim),
		weight: 0.9,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.7
	};

};

function style5(feature) {
	return {
		fillColor: getColor1(feature.properties.camb_temp_est_parroq_cor_visor_max_prim),
		weight: 0.9,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.7
	};

};

function popup1(feature, layer) {

	if (feature.properties && feature.properties.camb_temp_est_parroq_cor_visor_min_prim && feature.properties.nome_concel ) {
		layer.bindTooltip("<div id='custom'>"
		+"<strong>Parroquia: </strong>"+feature.properties.parroquia.toLocaleString()+"<br>"

			+"<strong>Concello: </strong>"+feature.properties.nome_concel.toLocaleString()+"<br>"
			             
            	+"<strong>Cambio en la temperatura: </strong>"+feature.properties.min_prim.toLocaleString().substring(0,4)+"°C",

			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

function popup5(feature, layer) {

	if (feature.properties && feature.properties.camb_temp_est_parroq_cor_visor_max_prim && feature.properties.nome_concel ) {
		layer.bindTooltip("<div id='custom'>"
		+"<strong>Parroquia: </strong>"+feature.properties.parroquia.toLocaleString()+"<br>"

			+"<strong>Concello: </strong>"+feature.properties.nome_concel.toLocaleString()+"<br>"
			             
            	+"<strong>Cambio en la temperatura: </strong>"+feature.properties.max_prim.toLocaleString().substring(0,4)+"°C",

			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};


var geojson1 = L.geoJson(tabla, {
	style: style1,
	onEachFeature: popup1
});

var geojson5 = L.geoJson(tabla, {
	style: style5,
	onEachFeature: popup5
});

//VERANO
function getColor2(a) {
	
	return a > 1.5? '#862666' :
	a >= 1.4? '#892750':
	a >= 1.3? '#8a273b':
	a >= 1.2? '#8a2827':
	a >= 1.1? '#9c2626':
	a >= 1.0? '#ab2627':
	a >= 0.9? '#bf2726':
	a >= 0.8? '#d52726':
	a >= 0.7? '#f02626':
	a >= 0.6? '#ff553e':
	a >= 0.5? '#ff8361':
	a >= 0.4? '#ffad8b':
	a >= 0.3? '#fec6a3': 
	a >= 0.2? '#ffdab5':
	a >= 0.1? '#feefc8':
	a < 0.1? '#FFEFDB':
	
	'#C25200';
};


function style2(feature) {
	return {
		fillColor: getColor1(feature.properties.camb_temp_est_parroq_cor_visor_min_ver),
		weight: 0.9,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.7
	};

};

function style6(feature) {
	return {
		fillColor: getColor1(feature.properties.camb_temp_est_parroq_cor_visor_max_ver),
		weight: 0.9,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.7
	};

};


function popup2(feature, layer) {

	if (feature.properties && feature.properties.camb_temp_est_parroq_cor_visor_min_ver && feature.properties.nome_concel) {
		layer.bindTooltip("<div id='custom'>"
		+"<strong>Parroquia: </strong>"+feature.properties.parroquia.toLocaleString()+"<br>"

			+"<strong>Concello: </strong>"+feature.properties.nome_concel.toLocaleString()+"<br>"
			             
            	+"<strong>Cambio en la temperatura: </strong>"+feature.properties.min_ver.toLocaleString().substring(0,4)+"°C",

			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

function popup6(feature, layer) {

	if (feature.properties && feature.properties.camb_temp_est_parroq_cor_visor_max_ver && feature.properties.nome_concel) {
		layer.bindTooltip("<div id='custom'>"
		+"<strong>Parroquia: </strong>"+feature.properties.parroquia.toLocaleString()+"<br>"

			+"<strong>Concello: </strong>"+feature.properties.nome_concel.toLocaleString()+"<br>"
			             
            	+"<strong>Cambio en la temperatura: </strong>"+feature.properties.max_ver.toLocaleString().substring(0,4)+"°C",

			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};


var geojson2 = L.geoJson(tabla, {
	style: style2,
	onEachFeature: popup2
});

var geojson6 = L.geoJson(tabla, {
	style: style6,
	onEachFeature: popup6
});


//MIN OTOÑO
function getColor3(a) {
	
	return a > 1.5? '#862666' :
	a >= 1.4? '#892750':
	a >= 1.3? '#8a273b':
	a >= 1.2? '#8a2827':
	a >= 1.1? '#9c2626':
	a >= 1.0? '#ab2627':
	a >= 0.9? '#bf2726':
	a >= 0.8? '#d52726':
	a >= 0.7? '#f02626':
	a >= 0.6? '#ff553e':
	a >= 0.5? '#ff8361':
	a >= 0.4? '#ffad8b':
	a >= 0.3? '#fec6a3': 
	a >= 0.2? '#ffdab5':
	a >= 0.1? '#feefc8':
	a < 0.1? '#FFEFDB':
	
	'#C25200';
};

function style3(feature) {
	return {
		fillColor: getColor1(feature.properties.camb_temp_est_parroq_cor_visor_min_ot),
		weight: 0.9,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.7
	};

};

function style7(feature) {
	return {
		fillColor: getColor1(feature.properties.camb_temp_est_parroq_cor_visor_max_ot),
		weight: 0.9,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.7
	};

};


function popup3(feature, layer) {

	if (feature.properties && feature.properties.min_ot && feature.properties.nome_concel) {
		layer.bindTooltip("<div id='custom'>"
		+"<strong>Parroquia: </strong>"+feature.properties.parroquia.toLocaleString()+"<br>"

			+"<strong>Concello: </strong>"+feature.properties.nome_concel.toLocaleString()+"<br>"
			             
            	+"<strong>Cambio en la temperatura: </strong>"+feature.properties.min_ot.toLocaleString().substring(0,4)+"°C",

			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};
function popup7(feature, layer) {

	if (feature.properties && feature.properties.max_ot && feature.properties.nome_concel) {
		layer.bindTooltip("<div id='custom'>"
		+"<strong>Parroquia: </strong>"+feature.properties.parroquia.toLocaleString()+"<br>"

			+"<strong>Concello: </strong>"+feature.properties.nome_concel.toLocaleString()+"<br>"
			             
            	+"<strong>Cambio en la temperatura: </strong>"+feature.properties.max_ot.toLocaleString().substring(0,5)+"°C",

			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};


var geojson3 = L.geoJson(tabla, {
	style: style3,
	onEachFeature: popup3
});

var geojson7 = L.geoJson(tabla, {
	style: style7,
	onEachFeature: popup7
});

//MIN INV
function getColor4(a) {
	
	return a > 1.3? '#8c2662' :
	a >= 1.1? '#a82743':
	a >= 0.9? '#c2252f':
	a >= 0.7? '#de3e35':
	a >= 0.5? '#f76659': 
	a >= 0.3? '#fc9288':
	a >= 0.1? '#ffd0b0':
	a < 0.1? '#ffffe8':
	
	'#C25200';
};


function style4(feature) {
	return {
		fillColor: getColor1(feature.properties.camb_temp_est_parroq_cor_visor_min_inv),
		weight: 0.9,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.7
	};};

function style8(feature) {
	return {
		fillColor: getColor1(feature.properties.camb_temp_est_parroq_cor_visor_max_inv),
		weight: 0.9,
		opacity: 1,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.7
	};};


function popup4(feature, layer) {

	if (feature.properties && feature.properties.min_inv && feature.properties.nome_concel) {
		layer.bindTooltip("<div id='custom'>"
		+"<strong>Parroquia: </strong>"+feature.properties.parroquia.toLocaleString()+"<br>"

			+"<strong>Concello: </strong>"+feature.properties.nome_concel.toLocaleString()+"<br>"
			             
            	+"<strong>Cambio en la temperatura: </strong>"+feature.properties.min_inv.toLocaleString().substring(0,4)+"°C",

			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

function popup8(feature, layer) {

	if (feature.properties && feature.properties.max_inv && feature.properties.nome_concel) {
		layer.bindTooltip("<div id='custom'>"
		+"<strong>Parroquia: </strong>"+feature.properties.parroquia.toLocaleString()+"<br>"

			+"<strong>Concello: </strong>"+feature.properties.nome_concel.toLocaleString()+"<br>"
			             
            	+"<strong>Cambio en la temperatura: </strong>"+feature.properties.max_inv.toLocaleString().substring(0,4)+"°C",

			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};


var geojson4 = L.geoJson(tabla, {
	style: style4,
	onEachFeature: popup4
});
var geojson8 = L.geoJson(tabla, {
	style: style8,
	onEachFeature: popup8
});




function styleCon(feature) {
	return {
		fillColor: 'green',
		weight: 0.5,
		opacity: 0.5,
		color: 'black',
		dashArray: '1',
		fillOpacity: 0.0
	};

};
function popupCon(feature, layer) {

	if (feature.properties && feature.properties.NomeConcel) {
		layer.bindTooltip("<strong>Concello: </strong>"+  
			feature.properties.NomeConcel,
			/*" <br><strong>Concello: </strong>"+
			feature.properties.Concello,
			*/{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var Concellos = L.geoJson(tabla,{
	style: styleCon,
	onEachFeature: popupCon
});

var mapa1 = L.layerGroup([geojson1]).addTo(map);
var mapa2 = L.layerGroup([geojson2]);
var mapa3 = L.layerGroup([geojson3]);
var mapa4 = L.layerGroup([geojson4]);
var mapa5 = L.layerGroup([geojson5]);
var mapa6 = L.layerGroup([geojson6]);
var mapa7 = L.layerGroup([geojson7]);
var mapa8 = L.layerGroup([geojson8]);

// var mapa14 = L.layerGroup([geojson14,Concellos]);
// var mapa15 = L.layerGroup([geojson15,Concellos]);







var baseTree = 
[
	{ label: "<strong>Limpar mapa", layer: osm3 },
  





{
	label: '<strong>Cambio nas temperaturas mínimas',
	children: [
	    { label: "Minimas primavera ",layer: mapa1},
	    { label: "Minimas verán ",layer: mapa2},
	    { label: "Minimas outono ",layer: mapa3},
	    { label: "Minimas inverno ",layer: mapa4},
	    
               ]
},
{
	label: '<strong>Cambio nas temperaturas máximas',
	children: [

	    { label: "Maximas primavera ",layer: mapa5},
	    { label: "Máximas verán ",layer: mapa6},
	    { label: "Máximas outono ",layer: mapa7},
	    { label: "Máximas inverno ",layer: mapa8}
               ]
},



		
	   
	
	
	 ];





var overlayTree = {
	label: '<strong>Mapas de referencia',
	children: [
	
		{ label: "Concellos", layer: conce},
		{ label: "OpenStreetmap", layer: osm},
		{ label: "Toponimia", layer: positronLabels},
		{ label: "Relevo", layer: relieve}
	]
};	




//leyendas

	var htmlLegend1 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Cambio na temperatura media mínima na primavera entre os períodos 1961-1990 e 1991-2020'+"<\h3>",
			layer: geojson1,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp     Media espacial por parroquias'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				
				label:"<h3>"+'<br><strong>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  °C </strong><br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}},  {		
			    label:"<h4>"+  '&nbsp&nbsp&nbsp  < 0,1 '+"<\h4>",html: '',style: {'background-color': '#FFEFDB','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '&nbsp 0,1 – 0,2 '+"<\h4>",html: '',style: {'background-color': '#feefc8','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,2 – 0,3 '+"<\h4>",html: '',style: {'background-color': '#ffdab5','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,3 – 0,4 '+"<\h4>",html: '',style: {'background-color': '#fec6a3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,4 – 0,5 '+"<\h4>",html: '',style: {'background-color': '#ffad8b','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,5 – 0,6 '+"<\h4>",html: '',style: {'background-color': '#ff8361','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,6 – 0,7 '+"<\h4>",html: '',style: {'background-color': '#ff553e','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,7 – 0,8 '+"<\h4>",html: '',style: {'background-color': '#f02626','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,8 – 0,9 '+"<\h4>",html: '',style: {'background-color': '#d52726','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,9 – 1,0 '+"<\h4>",html: '',style: {'background-color': '#bf2726','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,0 – 1,1 '+"<\h4>",html: '',style: {'background-color': '#ab2627','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,1 – 1,2 '+"<\h4>",html: '',style: {'background-color': '#9c2626','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,2 – 1,3 '+"<\h4>",html: '',style: {'background-color': '#8a2827','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,3 – 1,4 '+"<\h4>",html: '',style: {'background-color': '#8a273b','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,4 – 1,5 '+"<\h4>",html: '',style: {'background-color': '#892750','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp&nbsp&nbsp  ≥ 1,5 '+"<\h4>",html: '',style: {'background-color': '#862666' ,'width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		

				label: "<h5>" +'<BR><i>Fonte: CLIMACO, elaboración propia con datos da Axencia Estatal de Meteoroloxia (2022).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend1);

	var htmlLegend2 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Cambio na temperatura media mínima no verán entre os períodos 1961-1990 e 1991-2020'+"<\h3>",
			layer: geojson2,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp     Media espacial por parroquias'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				
				label:"<h3>"+'<br><strong>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  °C </strong><br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}},  {		
			    label:"<h4>"+  '&nbsp&nbsp&nbsp  < 0,1 '+"<\h4>",html: '',style: {'background-color': '#FFEFDB','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '&nbsp 0,1 – 0,2 '+"<\h4>",html: '',style: {'background-color': '#feefc8','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,2 – 0,3 '+"<\h4>",html: '',style: {'background-color': '#ffdab5','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,3 – 0,4 '+"<\h4>",html: '',style: {'background-color': '#fec6a3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,4 – 0,5 '+"<\h4>",html: '',style: {'background-color': '#ffad8b','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,5 – 0,6 '+"<\h4>",html: '',style: {'background-color': '#ff8361','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,6 – 0,7 '+"<\h4>",html: '',style: {'background-color': '#ff553e','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,7 – 0,8 '+"<\h4>",html: '',style: {'background-color': '#f02626','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,8 – 0,9 '+"<\h4>",html: '',style: {'background-color': '#d52726','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,9 – 1,0 '+"<\h4>",html: '',style: {'background-color': '#bf2726','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,0 – 1,1 '+"<\h4>",html: '',style: {'background-color': '#ab2627','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,1 – 1,2 '+"<\h4>",html: '',style: {'background-color': '#9c2626','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,2 – 1,3 '+"<\h4>",html: '',style: {'background-color': '#8a2827','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,3 – 1,4 '+"<\h4>",html: '',style: {'background-color': '#8a273b','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,4 – 1,5 '+"<\h4>",html: '',style: {'background-color': '#892750','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp&nbsp&nbsp  ≥ 1,5 '+"<\h4>",html: '',style: {'background-color': '#862666' ,'width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		

				label: "<h5>" +'<BR><i>Fonte: CLIMACO, elaboración propia con datos da Axencia Estatal de Meteoroloxia (2022)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend2);
	

	var htmlLegend3 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Cambio na temperatura media mínima no outono entre os períodos 1961-1990 e 1991-2020'+"<\h3>",
			layer: geojson3,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp     Media espacial por parroquias'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				
				label:"<h3>"+'<br><strong>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  °C </strong><br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}},  {		
			    label:"<h4>"+  '&nbsp&nbsp&nbsp  < 0,1 '+"<\h4>",html: '',style: {'background-color': '#FFEFDB','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '&nbsp 0,1 – 0,2 '+"<\h4>",html: '',style: {'background-color': '#feefc8','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,2 – 0,3 '+"<\h4>",html: '',style: {'background-color': '#ffdab5','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,3 – 0,4 '+"<\h4>",html: '',style: {'background-color': '#fec6a3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,4 – 0,5 '+"<\h4>",html: '',style: {'background-color': '#ffad8b','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,5 – 0,6 '+"<\h4>",html: '',style: {'background-color': '#ff8361','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,6 – 0,7 '+"<\h4>",html: '',style: {'background-color': '#ff553e','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,7 – 0,8 '+"<\h4>",html: '',style: {'background-color': '#f02626','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,8 – 0,9 '+"<\h4>",html: '',style: {'background-color': '#d52726','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,9 – 1,0 '+"<\h4>",html: '',style: {'background-color': '#bf2726','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,0 – 1,1 '+"<\h4>",html: '',style: {'background-color': '#ab2627','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,1 – 1,2 '+"<\h4>",html: '',style: {'background-color': '#9c2626','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,2 – 1,3 '+"<\h4>",html: '',style: {'background-color': '#8a2827','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,3 – 1,4 '+"<\h4>",html: '',style: {'background-color': '#8a273b','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,4 – 1,5 '+"<\h4>",html: '',style: {'background-color': '#892750','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp&nbsp&nbsp  ≥ 1,5 '+"<\h4>",html: '',style: {'background-color': '#862666' ,'width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		

				label: "<h5>" +'<BR><i>Fonte: CLIMACO, elaboración propia con datos da Axencia Estatal de Meteoroloxia (2022)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend3);

	var htmlLegend4 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Cambio na temperatura media mínima no inverno entre os períodos 1961-1990 e 1991-2020'+"<\h3>",
			layer: geojson4,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp     Media espacial por parroquias'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				
				label:"<h3>"+'<br><strong>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  °C </strong><br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}},  {		
			    label:"<h4>"+  '&nbsp&nbsp&nbsp  < 0,1 '+"<\h4>",html: '',style: {'background-color': '#FFEFDB','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '&nbsp 0,1 – 0,2 '+"<\h4>",html: '',style: {'background-color': '#feefc8','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,2 – 0,3 '+"<\h4>",html: '',style: {'background-color': '#ffdab5','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,3 – 0,4 '+"<\h4>",html: '',style: {'background-color': '#fec6a3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,4 – 0,5 '+"<\h4>",html: '',style: {'background-color': '#ffad8b','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,5 – 0,6 '+"<\h4>",html: '',style: {'background-color': '#ff8361','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,6 – 0,7 '+"<\h4>",html: '',style: {'background-color': '#ff553e','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,7 – 0,8 '+"<\h4>",html: '',style: {'background-color': '#f02626','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,8 – 0,9 '+"<\h4>",html: '',style: {'background-color': '#d52726','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,9 – 1,0 '+"<\h4>",html: '',style: {'background-color': '#bf2726','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,0 – 1,1 '+"<\h4>",html: '',style: {'background-color': '#ab2627','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,1 – 1,2 '+"<\h4>",html: '',style: {'background-color': '#9c2626','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,2 – 1,3 '+"<\h4>",html: '',style: {'background-color': '#8a2827','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,3 – 1,4 '+"<\h4>",html: '',style: {'background-color': '#8a273b','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,4 – 1,5 '+"<\h4>",html: '',style: {'background-color': '#892750','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp&nbsp&nbsp  ≥ 1,5 '+"<\h4>",html: '',style: {'background-color': '#862666' ,'width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		

				label: "<h5>" +'<BR><i>Fonte: CLIMACO, elaboración propia con datos da Axencia Estatal de Meteoroloxia (2022)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend4);


	var htmlLegend5 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Cambio na temperatura media máxima na primavera entre os períodos 1961-1990 e 1991-2020'+"<\h3>",
			layer: geojson5,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp     Media espacial por parroquias'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				
				label:"<h3>"+'<br><strong>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  °C </strong><br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}},  {		
			    label:"<h4>"+  '&nbsp&nbsp&nbsp  < 0,1 '+"<\h4>",html: '',style: {'background-color': '#FFEFDB','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '&nbsp 0,1 – 0,2 '+"<\h4>",html: '',style: {'background-color': '#feefc8','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,2 – 0,3 '+"<\h4>",html: '',style: {'background-color': '#ffdab5','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,3 – 0,4 '+"<\h4>",html: '',style: {'background-color': '#fec6a3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,4 – 0,5 '+"<\h4>",html: '',style: {'background-color': '#ffad8b','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,5 – 0,6 '+"<\h4>",html: '',style: {'background-color': '#ff8361','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,6 – 0,7 '+"<\h4>",html: '',style: {'background-color': '#ff553e','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,7 – 0,8 '+"<\h4>",html: '',style: {'background-color': '#f02626','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,8 – 0,9 '+"<\h4>",html: '',style: {'background-color': '#d52726','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,9 – 1,0 '+"<\h4>",html: '',style: {'background-color': '#bf2726','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,0 – 1,1 '+"<\h4>",html: '',style: {'background-color': '#ab2627','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,1 – 1,2 '+"<\h4>",html: '',style: {'background-color': '#9c2626','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,2 – 1,3 '+"<\h4>",html: '',style: {'background-color': '#8a2827','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,3 – 1,4 '+"<\h4>",html: '',style: {'background-color': '#8a273b','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,4 – 1,5 '+"<\h4>",html: '',style: {'background-color': '#892750','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp&nbsp&nbsp  ≥ 1,5 '+"<\h4>",html: '',style: {'background-color': '#862666' ,'width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		

				label: "<h5>" +'<BR><i>Fonte: CLIMACO, elaboración propia con datos da Axencia Estatal de Meteoroloxia (2022)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend5);

	var htmlLegend6 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Cambio na temperatura media máxima no verán entre os períodos 1961-1990 e 1991-2020'+"<\h3>",
			layer: geojson6,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp     Media espacial por parroquias'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				
				label:"<h3>"+'<br><strong>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  °C </strong><br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}},  {		
			    label:"<h4>"+  '&nbsp&nbsp&nbsp  < 0,1 '+"<\h4>",html: '',style: {'background-color': '#FFEFDB','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '&nbsp 0,1 – 0,2 '+"<\h4>",html: '',style: {'background-color': '#feefc8','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,2 – 0,3 '+"<\h4>",html: '',style: {'background-color': '#ffdab5','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,3 – 0,4 '+"<\h4>",html: '',style: {'background-color': '#fec6a3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,4 – 0,5 '+"<\h4>",html: '',style: {'background-color': '#ffad8b','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,5 – 0,6 '+"<\h4>",html: '',style: {'background-color': '#ff8361','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,6 – 0,7 '+"<\h4>",html: '',style: {'background-color': '#ff553e','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,7 – 0,8 '+"<\h4>",html: '',style: {'background-color': '#f02626','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,8 – 0,9 '+"<\h4>",html: '',style: {'background-color': '#d52726','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,9 – 1,0 '+"<\h4>",html: '',style: {'background-color': '#bf2726','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,0 – 1,1 '+"<\h4>",html: '',style: {'background-color': '#ab2627','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,1 – 1,2 '+"<\h4>",html: '',style: {'background-color': '#9c2626','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,2 – 1,3 '+"<\h4>",html: '',style: {'background-color': '#8a2827','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,3 – 1,4 '+"<\h4>",html: '',style: {'background-color': '#8a273b','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,4 – 1,5 '+"<\h4>",html: '',style: {'background-color': '#892750','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp&nbsp&nbsp  ≥ 1,5 '+"<\h4>",html: '',style: {'background-color': '#862666' ,'width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		

				label: "<h5>" +'<BR><i>Fonte: CLIMACO, elaboración propia con datos da Axencia Estatal de Meteoroloxia (2022)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend6);

	var htmlLegend7 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Cambio na temperatura media máxima no outono entre os períodos 1961-1990 e 1991-2020'+"<\h3>",
			layer: geojson7,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.     &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp     Media espacial por parroquias'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				
				label:"<h3>"+'<br><strong>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  °C </strong><br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}},  {		
			    label:"<h4>"+  '&nbsp&nbsp&nbsp  < 0,1 '+"<\h4>",html: '',style: {'background-color': '#FFEFDB','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '&nbsp 0,1 – 0,2 '+"<\h4>",html: '',style: {'background-color': '#feefc8','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,2 – 0,3 '+"<\h4>",html: '',style: {'background-color': '#ffdab5','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,3 – 0,4 '+"<\h4>",html: '',style: {'background-color': '#fec6a3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,4 – 0,5 '+"<\h4>",html: '',style: {'background-color': '#ffad8b','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,5 – 0,6 '+"<\h4>",html: '',style: {'background-color': '#ff8361','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,6 – 0,7 '+"<\h4>",html: '',style: {'background-color': '#ff553e','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,7 – 0,8 '+"<\h4>",html: '',style: {'background-color': '#f02626','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,8 – 0,9 '+"<\h4>",html: '',style: {'background-color': '#d52726','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,9 – 1,0 '+"<\h4>",html: '',style: {'background-color': '#bf2726','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,0 – 1,1 '+"<\h4>",html: '',style: {'background-color': '#ab2627','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,1 – 1,2 '+"<\h4>",html: '',style: {'background-color': '#9c2626','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,2 – 1,3 '+"<\h4>",html: '',style: {'background-color': '#8a2827','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,3 – 1,4 '+"<\h4>",html: '',style: {'background-color': '#8a273b','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,4 – 1,5 '+"<\h4>",html: '',style: {'background-color': '#892750','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp&nbsp&nbsp  ≥ 1,5 '+"<\h4>",html: '',style: {'background-color': '#862666' ,'width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		

				label: "<h5>" +'<BR><i>Fonte: CLIMACO, elaboración propia con datos da Axencia Estatal de Meteoroloxia (2022)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend7);

	var htmlLegend8 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Cambio na temperatura media máxima no inverno entre os períodos 1961-1990 e 1991-2020'+"<\h3>",
			layer: geojson8,
		image:'<img src="images/LOGO_GEN.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp     Media espacial por parroquias'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				
				label:"<h3>"+'<br><strong>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  °C </strong><br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}},  {		
			    label:"<h4>"+  '&nbsp&nbsp&nbsp  < 0,1 '+"<\h4>",html: '',style: {'background-color': '#FFEFDB','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {	
				label:"<h4>"+  '&nbsp 0,1 – 0,2 '+"<\h4>",html: '',style: {'background-color': '#feefc8','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,2 – 0,3 '+"<\h4>",html: '',style: {'background-color': '#ffdab5','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,3 – 0,4 '+"<\h4>",html: '',style: {'background-color': '#fec6a3','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,4 – 0,5 '+"<\h4>",html: '',style: {'background-color': '#ffad8b','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,5 – 0,6 '+"<\h4>",html: '',style: {'background-color': '#ff8361','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,6 – 0,7 '+"<\h4>",html: '',style: {'background-color': '#ff553e','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,7 – 0,8 '+"<\h4>",html: '',style: {'background-color': '#f02626','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,8 – 0,9 '+"<\h4>",html: '',style: {'background-color': '#d52726','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 0,9 – 1,0 '+"<\h4>",html: '',style: {'background-color': '#bf2726','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,0 – 1,1 '+"<\h4>",html: '',style: {'background-color': '#ab2627','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,1 – 1,2 '+"<\h4>",html: '',style: {'background-color': '#9c2626','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,2 – 1,3 '+"<\h4>",html: '',style: {'background-color': '#8a2827','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,3 – 1,4 '+"<\h4>",html: '',style: {'background-color': '#8a273b','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp 1,4 – 1,5 '+"<\h4>",html: '',style: {'background-color': '#892750','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
				label:"<h4>"+  '&nbsp&nbsp&nbsp  ≥ 1,5 '+"<\h4>",html: '',style: {'background-color': '#862666' ,'width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		

				label: "<h5>" +'<BR><i>Fonte: CLIMACO, elaboración propia con datos da Axencia Estatal de Meteoroloxia (2022)<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 0.5, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend8);


//minimapa	
  var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true, position:"topleft", width:100,height:100,}).addTo(map); 	




//Visualizar capas
// L.control.layers(baseLayers, overlays,{collapsed:true, position: 'topright',}).addTo(map);
L.control.layers.tree(baseTree, overlayTree,{collapsed:true}).collapseTree(baseTree,overlayTree).addTo(map);

//boton de informacion 
var button2 = new L.Control.Button(L.DomUtil.get('helpbutton2'), { toggleButton: 'active', position: 'topright'});
	button2.addTo(map);
	button2.on('click', function () {
	 if (button2.isToggled()) {
			sidebar2.hide();
		} else {
			sidebar2.show();
		}
	});