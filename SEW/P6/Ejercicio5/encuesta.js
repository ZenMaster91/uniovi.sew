'use strict';
class Encuesta {

  constructor() {
    this.average = 0.0;
  }

  calculateAvr() {
    this.average = (formulario.facilidad.value + formulario.funcionalidad.value) / 2;
  }

  sendByMail() {
    this.calculateAvr();
    alert('Enviando por email los datos de la encuesta...;' +
      formulario.nombre.value + ';' +
      formulario.apellidos.value + ';' +
      formulario.edad.value + ';' +
      formulario.email.value + ';' +
      this.average);
  }

  campoNoNulo(value, fieldName) {
    if (value == '') {
      alert('El ' + fieldName + ' es obligatorio.');
      event.returnValue = false;

      return false;
    }

    return true;
  }

  validate() {
    if (this.campoNoNulo(formulario.nombre.value, 'nombre') &&
      this.campoNoNulo(formulario.apellidos.value, 'apellidos') &&
      this.campoNoNulo(formulario.edad.value, 'edad') &&
      this.campoNoNulo(formulario.email.value, 'email')) {
      this.sendByMail();
    }
  }
}
var e = new Encuesta();
