var factorial = require("./funciones.js").factorial;
var assert = require("assert")
describe('Pruebas', function(){
  describe('Factorial()', function(){
    it('Debe retornar 1 si es menor el valor de entrada es 0', function(){
      assert.equal(1, factorial(1));
    });
    it('Debe retornar el resultado de una multiplicación sucesiva', function(){
      assert.equal(120, factorial(5));
    });
  })
})

