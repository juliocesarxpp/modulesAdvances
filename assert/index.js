// Método	                            Uso principal
// assert(value)	                Verifica condição simples
// assert.strictEqual(a, b)	        Comparar valores simples
// assert.notStrictEqual(a, b)	    Garantir que valores não são iguais
// assert.deepStrictEqual(a, b)	    Comparar objetos/arrays
// assert.throws(fn)	            Testar função que deve dar erro
// assert.doesNotThrow(fn)	        Testar função que não deve dar erro
// assert.fail(msg)	                Marcar erro manualmente

const assert = require('assert');

// method assert(value, message)

// variable
const isAdmin = true;
assert(isAdmin, 'variable false');

// function
function returnTrue() {
    return 10 > 5;
}
assert(returnTrue(), 'function is false');

// object
const user = { ativo: true };
assert(user.ativo, 'ativo is false');


//  method assert.strictEqual(actual, expected)

// variable
const soma = 2 + 2;
assert.strictEqual(soma, 4);

// function
function dobro(n) {
  return n * 2;
}
assert.strictEqual(dobro(5), 10);

// object (comparing properties)
const produto = { preco: 100 };
assert.strictEqual(produto.preco, 100);


// method assert.notStrictEqual(actual, expected)

// variable
const idade = 17;
assert.notStrictEqual(idade, 18);

// function
function status(usuario) {
  return usuario.ativo;
}
assert.notStrictEqual(status({ ativo: false }), true);

// object (different reference)
const obj1 = {};
const obj2 = {};
assert.notStrictEqual(obj1, obj2);


// method assert.deepStrictEqual(actual, expected)

// array
assert.deepStrictEqual([1, 2, 3], [1, 2, 3]);

// function returning object
function criarUser() {
  return { nome: 'Júlio', idade: 16 };
}
assert.deepStrictEqual(
  criarUser(),
  { nome: 'Júlio', idade: 16 }
);

// nested object
const a = { x: { y: 10 } };
const b = { x: { y: 10 } };
assert.deepStrictEqual(a, b);


// method assert.throws(fn)

// function
function dividir(a, b) {
  if (b === 0) {
    throw new Error('Divisão por zero');
  }
  return a / b;
}
assert.throws(() => dividir(10, 0));

// with error type
assert.throws(
  () => dividir(10, 0),
  Error
);


// method assert.doesNotThrow(fn)

// safe function
function somar(a, b) {
  return a + b;
}
assert.doesNotThrow(() => somar(2, 3));

// object with method
const calc = {
  mult(a, b) {
    return a * b;
  }
};
assert.doesNotThrow(() => calc.mult(2, 4));


// método assert.fail(message)

// variable
const saldo = -10;
if (saldo < 0) {
  assert.fail('Saldo não pode ser negativo');
}

// function
function sacar(valor) {
  if (valor <= 0) {
    assert.fail('Valor inválido');
  }
}
