'use strict';
class MeteoData {

  constructor(city, codCountry, units, lang, mode) {
    this.apiKey = 'f252af005dec8f2cc75fe519e79a2675';
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&units=' + units +
      '&lang=' + lang +
      '&APPID=' + this.apiKey +
      '&mode=' + mode;
  }

  load() {
    $.ajax({
      dataType: 'xml',
      url: this.url,
      method: 'GET',
      success: function (datos) {
        //Pasar el archivo XML a un string
        var str = (new XMLSerializer()).serializeToString(datos);

        var ciudad = $('city', datos).attr('name');
        var longitud = $('coord', datos).attr('lon');
        var latitud = $('coord', datos).attr('lat');
        var pais = $('country', datos).text();
        var amanecer = $('sun', datos).attr('rise');
        var minutosZonaHoraria = new Date().getTimezoneOffset();
        var amanecerMiliSeg1970 = Date.parse(amanecer);
        amanecerMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
        var amanecerLocal = (new Date(amanecerMiliSeg1970)).toLocaleTimeString('es-ES');
        var oscurecer = $('sun', datos).attr('set');
        var oscurecerMiliSeg1970 = Date.parse(oscurecer);
        oscurecerMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
        var oscurecerLocal = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString('es-ES');
        var temperatura = $('temperature', datos).attr('value');
        var temperaturaMin = $('temperature', datos).attr('min');
        var temperaturaMax = $('temperature', datos).attr('max');
        var temperaturaUnit = $('temperature', datos).attr('unit');
        var humedad = $('humidity', datos).attr('value');
        var humedadUnit = $('humidity', datos).attr('unit');
        var presion = $('pressure', datos).attr('value');
        var presionUnit = $('pressure', datos).attr('unit');
        var velocidadViento = $('speed', datos).attr('value');
        var nombreViento = $('speed', datos).attr('name');
        var direccionViento = $('direction', datos).attr('value');
        var codigoViento = $('direction', datos).attr('code');
        var nombreDireccionViento = $('direction', datos).attr('name');
        var nubosidad = $('clouds', datos).attr('value');
        var nombreNubosidad = $('clouds', datos).attr('name');
        var visibilidad = $('visibility', datos).attr('value');
        var precipitacion = $('precipitation', datos).attr('mode');
        var descripcion = $('weather', datos).attr('value');
        var horaMedida = $('lastupdate', datos).attr('value');
        var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
        horaMedidaMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
        var horaMedidaLocal = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString('es-ES');
        var fechaMedidaLocal = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString('es-ES');

        var stringDatos = '<ul><li>Ciudad: ' + ciudad + '</li>';
        stringDatos += '<li>Longitud: ' + longitud + ' grados</li>';
        stringDatos += '<li>Latitud: ' + latitud + ' grados</li>';
        stringDatos += '<li>País: ' + pais + '</li>';
        stringDatos += '<li>Amanece a las: ' + amanecerLocal + '</li>';
        stringDatos += '<li>Oscurece a las: ' + oscurecerLocal + '</li>';
        stringDatos += '<li>Temperatura: ' + temperatura + ' grados Celsius</li>';
        stringDatos += '<li>Temperatura mínima: ' + temperaturaMin + ' grados Celsius</li>';
        stringDatos += '<li>Temperatura máxima: ' + temperaturaMax + ' grados Celsius</li>';
        stringDatos += '<li>Temperatura (unidades): ' + temperaturaUnit + '</li>';
        stringDatos += '<li>Humedad: ' + humedad + ' ' + humedadUnit + '</li>';
        stringDatos += '<li>Presión: ' + presion + ' ' + presionUnit + '</li>';
        stringDatos += '<li>Velocidad del viento: ' + velocidadViento + ' metros/segundo</li>';
        stringDatos += '<li>Nombre del viento: ' + nombreViento + '</li>';
        stringDatos += '<li>Dirección del viento: ' + direccionViento + ' grados</li>';
        stringDatos += '<li>Código del viento: ' + codigoViento + '</li>';
        stringDatos += '<li>Nombre del viento: ' + nombreDireccionViento + '</li>';
        stringDatos += '<li>Nubosidad: ' + nubosidad + '</li>';
        stringDatos += '<li>Nombre nubosidad: ' + nombreNubosidad + '</li>';
        stringDatos += '<li>Visibilidad: ' + visibilidad + ' metros</li>';
        stringDatos += '<li>Precipitación: ' + precipitacion + '</li>';
        stringDatos += '<li>Descripción: ' + descripcion + '</li>';
        stringDatos += '<li>Hora de la medida: ' + horaMedidaLocal + '</li>';
        stringDatos += '<li>Fecha de la medida: ' + fechaMedidaLocal + '</li></ul>';

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

var data = new MeteoData('Oviedo', 'ES', 'metric', 'es', 'xml');
data.load();
