'use strict';
class Calculator {

  constructor() {
    this.expresion = '0';
    this.operating = false;
  }

  addItem(item) {
    if (this.expresion === '0' && item != '.') {
      this.expresion = '';
    }

    this.expresion += item;
    document.getElementById('viewer').innerHTML = this.expresion;
  }

  clear() {
    document.getElementById('viewer').innerHTML = 0;
    this.expresion = document.getElementById('viewer').innerHTML;
  }

  equals() {
    this.expresion = Math.round(eval(this.expresion) * 1000000000) / 1000000000;
    document.getElementById('viewer').innerHTML = this.expresion;
    this.operating = false;
  }

  perCent() {
    this.expresion = eval(this.expresion + '/100');
    document.getElementById('viewer').innerHTML = this.expresion;
  }

  plusMinus() {
    this.expresion = eval(this.expresion + '*-1');
    document.getElementById('viewer').innerHTML = this.expresion;
  }
}

var c = new Calculator();
