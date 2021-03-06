var idLocal, local;
var myLat, myLon;
let map, infoWindow;

function geo() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);

  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  myLat = position.coords.latitude; 
  myLon = position.coords.longitude;
 
  console.log(myLat)

  var obj = ' { "data": [{"idRegiao": 1, "idAreaAviso": "AVR", "idConcelho": 5, "globalIdLocal": 1010500, "latitude": "40.6413", "idDistrito": 1, "local": "Aveiro", "longitude": "-8.6535"},     {"idRegiao": 1, "idAreaAviso": "BJA", "idConcelho": 5, "globalIdLocal": 1020500, "latitude": "38.0200", "idDistrito": 2, "local": "Beja", "longitude": "-7.8700"},     {"idRegiao": 1, "idAreaAviso": "BRG", "idConcelho": 3, "globalIdLocal": 1030300, "latitude": "41.5475", "idDistrito": 3, "local": "Braga", "longitude": "-8.4227"},      {"idRegiao": 1, "idAreaAviso": "BGC", "idConcelho": 2, "globalIdLocal": 1040200, "latitude": "41.8076", "idDistrito": 4, "local": "Bragan\u00e7a", "longitude": "-6.7606"},    {"idRegiao": 1, "idAreaAviso": "CBO", "idConcelho": 2, "globalIdLocal": 1050200, "latitude": "39.8217", "idDistrito": 5, "local": "Castelo Branco", "longitude": "-7.4957"},      {"idRegiao": 1, "idAreaAviso": "CBR", "idConcelho": 3, "globalIdLocal": 1060300, "latitude": "40.2081", "idDistrito": 6, "local": "Coimbra", "longitude": "-8.4194"},     {"idRegiao": 1, "idAreaAviso": "EVR", "idConcelho": 5, "globalIdLocal": 1070500, "latitude": "38.5701", "idDistrito": 7, "local": "\u00c9vora", "longitude": "-7.9104"},  {    "idRegiao": 1, "idAreaAviso": "FAR", "idConcelho": 5, "globalIdLocal": 1080500, "latitude": "37.0146", "idDistrito": 8, "local": "Faro", "longitude": "-7.9331"}, {    "idRegiao": 1, "idAreaAviso": "GDA", "idConcelho": 7, "globalIdLocal": 1090700, "latitude": "40.5379", "idDistrito": 9, "local": "Guarda", "longitude": "-7.2647"},     {"idRegiao": 1, "idAreaAviso": "LRA", "idConcelho": 9, "globalIdLocal": 1100900, "latitude": "39.7473", "idDistrito": 10, "local": "Leiria", "longitude": "-8.8069"},      {"idRegiao": 1, "idAreaAviso": "LSB", "idConcelho": 6, "globalIdLocal": 1110600, "latitude": "38.7660", "idDistrito": 11, "local": "Lisboa", "longitude": "-9.1286"},     {"idRegiao": 1, "idAreaAviso": "PTG", "idConcelho": 14, "globalIdLocal": 1121400, "latitude": "39.2900", "idDistrito": 12, "local": "Portalegre", "longitude": "-7.4200"},      {"idRegiao": 1, "idAreaAviso": "PTO", "idConcelho": 12, "globalIdLocal": 1131200, "latitude": "41.1580", "idDistrito": 13, "local": "Porto", "longitude": "-8.6294"},      {"idRegiao": 1, "idAreaAviso": "STM", "idConcelho": 16, "globalIdLocal": 1141600, "latitude": "39.2000", "idDistrito": 14, "local": "Santar\u00e9m", "longitude": "-8.7400"},     {"idRegiao": 1, "idAreaAviso": "STB", "idConcelho": 12, "globalIdLocal": 1151200, "latitude": "38.5246", "idDistrito": 15, "local": "Set\u00fabal", "longitude": "-8.8856"},             {"idRegiao": 1, "idAreaAviso": "VCT", "idConcelho": 9, "globalIdLocal": 1160900, "latitude": "41.6952", "idDistrito": 16, "local": "Viana do Castelo", "longitude": "-8.8365"},             {"idRegiao": 1, "idAreaAviso": "VRL", "idConcelho": 14, "globalIdLocal": 1171400, "latitude": "41.3053", "idDistrito": 17, "local": "Vila Real", "longitude": "-7.7440"},             {"idRegiao": 1, "idAreaAviso": "VIS", "idConcelho": 23, "globalIdLocal": 1182300, "latitude": "40.6585", "idDistrito": 18, "local": "Viseu", "longitude": "-7.9120"},              {"idRegiao": 2, "idAreaAviso": "MCS", "idConcelho": 3, "globalIdLocal": 2310300, "latitude": "32.6485", "idDistrito": 31, "local": "Funchal", "longitude": "-16.9084"},             {"idRegiao": 2, "idAreaAviso": "MPS", "idConcelho": 1, "globalIdLocal": 2320100, "latitude": "33.0700", "idDistrito": 32, "local": "Porto Santo", "longitude": "-16.3400"},             {"idRegiao": 3, "idAreaAviso": "AOR", "idConcelho": 1, "globalIdLocal": 3410100, "latitude": "36.9563", "idDistrito": 41, "local": "Vila do Porto", "longitude": "-25.1409"},             {"idRegiao": 3, "idAreaAviso": "AOR", "idConcelho": 3, "globalIdLocal": 3420300, "latitude": "37.7415", "idDistrito": 42, "local": "Ponta Delgada", "longitude": "-25.6677"},             {"idRegiao": 3, "idAreaAviso": "ACE", "idConcelho": 1, "globalIdLocal": 3430100, "latitude": "38.6700", "idDistrito": 43, "local": "Angra do Hero\u00edsmo", "longitude": "-27.2200"},            {"idRegiao": 3, "idAreaAviso": "ACE", "idConcelho": 1, "globalIdLocal": 3440100, "latitude": "39.0800", "idDistrito": 44, "local": "Santa Cruz da Graciosa", "longitude": "-28.0000"},             {"idRegiao": 3, "idAreaAviso": "ACE", "idConcelho": 2, "globalIdLocal": 3450200, "latitude": "38.6842", "idDistrito": 45, "local": "Velas", "longitude": "-28.2133"},             {"idRegiao": 3, "idAreaAviso": "ACE", "idConcelho": 2, "globalIdLocal": 3460200, "latitude": "38.5325", "idDistrito": 46, "local": "Madalena", "longitude": "-28.5237"},             {"idRegiao": 3, "idAreaAviso": "ACE", "idConcelho": 1, "globalIdLocal": 3470100, "latitude": "38.5363", "idDistrito": 47, "local": "Horta", "longitude": "-28.6315"},             {"idRegiao": 3, "idAreaAviso": "AOC", "idConcelho": 2, "globalIdLocal": 3480200, "latitude": "39.4500", "idDistrito": 48, "local": "Santa Cruz das Flores", "longitude": "-31.1300"},             {"idRegiao": 3, "idAreaAviso": "AOC", "idConcelho": 1, "globalIdLocal": 3490100, "latitude": "39.6700", "idDistrito": 49, "local": "Vila do Corvo", "longitude": "-31.1200"  } ] }';

  var lat_1 = 0;
  var lon_1 = 0;

  var data = JSON.parse(obj)

  for (var i = 0; i < data["data"].length; i++) {
    var temp = data["data"][i];
    lat_1 = parseFloat(temp["latitude"]).toFixed(1);
    lon_1 = parseFloat(temp["longitude"]).toFixed(0);

    console.log(lat_1)
    console.log(myLat)

    if (parseFloat(myLat).toFixed(1) == lat_1 && parseFloat(myLon).toFixed(0) == lon_1) {
      console.log(data["data"][i]["globalIdLocal"])
      idLocal = data["data"][i]["globalIdLocal"]
      local = data["data"][i]["local"]
    } else {
      console.log("Not found :(")
    }
  }
  document.getElementById("local").textContent = local;

  var image = document.getElementById('image1');
  image.src = "img/locais/" + local + "1.jpg";

  var image2 = document.getElementById('image2');
  image2.src = "img/locais/" + local + "2.jpg";

  var image3 = document.getElementById('image3');
  image3.src = "img/locais/" + local + "3.jpg";

  var xmlhttp = new XMLHttpRequest();

  var url = "https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/" + idLocal + ".json";
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

      var myArr = JSON.parse(this.responseText);
      const tMaxHoje = (myArr["data"][0])["tMax"];
      const tMinimaHoje = (myArr["data"][0])["tMin"];
      const probChuvaHoje = (myArr["data"][0])["precipitaProb"];
      const direcVentoHoje = (myArr["data"][0])["predWindDir"];
      const ventoHoje = (myArr["data"][0])["classWindSpeed"];

      const tMaxAmanha = (myArr["data"][1])["tMax"];
      const tMinimaAmanha = (myArr["data"][1])["tMin"];
      const probChuvaAmanha = (myArr["data"][1])["precipitaProb"];
      const direcVentoAmanha = (myArr["data"][1])["predWindDir"];
      const ventoAmanha = (myArr["data"][1])["classWindSpeed"];

      const tMaxDepois = (myArr["data"][2])["tMax"];
      const tMinimaDepois = (myArr["data"][2])["tMin"];
      const probChuvaDepois = (myArr["data"][2])["precipitaProb"];
      const direcVentoDepois = (myArr["data"][2])["predWindDir"];
      const ventoDepois = (myArr["data"][2])["classWindSpeed"];

      console.log(myArr);
      document.getElementById('overlay1').style.display = "block";
      document.getElementById('overlay3').style.display = "block";
      document.getElementById('overlay2').style.display = "block";
      document.getElementById("tempMaxHoje").textContent = "Temperatura M??xima: " + tMaxHoje + " ??C";
      document.getElementById("tempMinHoje").textContent = "Temperatura Minima: " + tMinimaHoje + " ??C";
      document.getElementById("intVentoHoje").textContent = "Intensidade do Vento: " + ventoHoje + "kts";
      document.getElementById("directVentoHoje").textContent = "Direc????o do Vento: " + direcVentoHoje + "??";
      document.getElementById("chuvaHoje").textContent = "Probabilidade de Precipita????o: " + probChuvaHoje;

      document.getElementById("tempMaxAmanha").textContent = "Temperatura M??xima: " + tMaxAmanha + " ??C";
      document.getElementById("tempMinAmanha").textContent = "Temperatura Minima: " + tMinimaAmanha + " ??C";
      document.getElementById("intVentoAmanha").textContent = "Intensidade do Vento: " + ventoAmanha + "kts";
      document.getElementById("directVentoAmanha").textContent = "Direc????o do Vento: " + direcVentoAmanha + "??";
      document.getElementById("chuvaAmanha").textContent = "Probabilidade de Precipita????o: " + probChuvaAmanha;

      document.getElementById("tempMaxDepois").textContent = "Temperatura M??xima: " + tMaxDepois + " ??C";
      document.getElementById("tempMinDepois").textContent = "Temperatura Minima: " + tMinimaDepois + " ??C";
      document.getElementById("intVentoDepois").textContent = "Intensidade do Vento: " + ventoDepois + "kts";
      document.getElementById("directVentoDepois").textContent = "Direc????o do Vento: " + direcVentoDepois + "??";
      document.getElementById("chuvaDepois").textContent = "Probabilidade de Precipita????o: " + probChuvaDepois;

      document.getElementById("today").textContent = "today";
      document.getElementById("tomorrow").textContent = "tomorrow";
      document.getElementById("nextDay").textContent = "day after tomorrow";
    }
  };

  xmlhttp.open("GET", url, true);

  xmlhttp.send();
}


