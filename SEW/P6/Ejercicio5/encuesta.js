'use strict';
class Encuesta {

  constructor() {
    this.average = 0.0;
  }

  calculateAvr() {
    average = (formulario.facilidad.value + formulario.funcionalidad.value) / 2;
  }

  campoNoNulo(value, fieldName) {
    if (value == '') {
      alert('El ' + fieldName + ' es obligatorio.');
      event.returnValue = false;
    }
  }

  validate() {
    this.campoNoNulo(formulario.nombre.value, 'nombre');
    this.campoNoNulo(formulario.apellidos.value, 'apellidos');
    this.campoNoNulo(formulario.edad.value, 'edad');
    this.campoNoNulo(formulario.email.value, 'email');
    this.calculateAvr();
  }
}
var e = new Encuesta();
