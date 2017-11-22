$.getJSON('oviedo.json', function (datos) {
  var output = '<ul>';
  output += '<li>Ciudad: ' + datos.name + '</li>';
  output += '<li>País: ' + datos.sys.country + '</li>';
  output += '<li>Temperatura:' + datos.main.temp + ' grados Celsius</li>';
  output += '<li>Presión:' + datos.main.pressure + ' milibares</li>';
  output += '<li>Humedad:' + datos.main.humidity + ' %</li>';
  output += '</ul>';
  document.getElementById('ficha').innerHTML = output;
});
