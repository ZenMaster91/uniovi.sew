'use strict';
class MeteoData {

  constructor(city, codCountry, units, lang) {
    this.apiKey = 'f252af005dec8f2cc75fe519e79a2675';
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&units=' + units +
      '&lang=' + lang +
      '&APPID=' + this.apiKey;
  }

  load() {
    $.ajax({
      dataType: 'json',
      url: this.url,
      method: 'GET',
      success: function (datos) {

        var stringDatos = '<ul><li>Ciudad: ' + datos.name + '</li>';
        stringDatos += '<li>País: ' + datos.sys.country + '</li>';
        stringDatos += '<li>Latitud: ' + datos.coord.lat + ' grados</li>';
        stringDatos += '<li>Longitud: ' + datos.coord.lon + ' grados</li>';
        stringDatos += '<li>Temperatura: ' + datos.main.temp + ' grados Celsius</li>';
        stringDatos += '<li>Temperatura máxima: ' + datos.main.temp_max + ' grados Celsius</li>';
        stringDatos += '<li>Temperatura mínima: ' + datos.main.temp_min + ' grados Celsius</li>';
        stringDatos += '<li>Presión: ' + datos.main.pressure + ' milibares</li>';
        stringDatos += '<li>Humedad: ' + datos.main.humidity + ' %</li>';
        stringDatos += '<li>Amanece a las: ' +
          new Date(datos.sys.sunrise * 1000).toLocaleTimeString() + '</li>';
        stringDatos += '<li>Oscurece a las: ' +
          new Date(datos.sys.sunset * 1000).toLocaleTimeString() + '</li>';
        stringDatos += '<li>Dirección del viento: ' + datos.wind.deg + ' grados</li>';
        stringDatos += '<li>Velocidad del viento: ' + datos.wind.speed + ' metros/segundo</li>';
        stringDatos += '<li>Descripción: ' + datos.weather[0].description + '</li>';
        stringDatos += '<li>Visibilidad: ' + datos.visibility + ' metros</li>';
        stringDatos += '<li>Nubosidad: ' + datos.clouds.all + ' %</li></ul>';

        $('p').html(stringDatos);
      },

      error: function () {
        $('h3').html('La ciudad introducida no es válida');
        $('h3').attr('id', 'err');
        $('h4').remove();
        $('pre').remove();
        $('p').remove();
      },
    });
  }

}

var data = new MeteoData('Oviedo', 'ES', 'metric', 'es');
data.load();
