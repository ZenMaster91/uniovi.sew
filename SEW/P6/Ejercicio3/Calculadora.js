var expresion = '';
class Calculadora {

  añadirValor(valor) {
    expresion = expresion + valor;
  }

  evaluar(expresion) {
    eval(expresion);
  }
}
