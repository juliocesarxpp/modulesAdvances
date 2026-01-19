// Método	                            Uso principal
// assert(value)	                Verifica condição simples
// assert.strictEqual(a, b)	        Comparar valores simples
// assert.notStrictEqual(a, b)	    Garantir que valores não são iguais
// assert.deepStrictEqual(a, b)	    Comparar objetos/arrays
// assert.throws(fn)	            Testar função que deve dar erro
// assert.doesNotThrow(fn)	        Testar função que não deve dar erro
// assert.fail(msg)	                Marcar erro manualmente


const assert = require('assert');

// Método assert

// variable
const isAdmin = false;
assert(isAdmin, 'variable false');

// function
function returnTrue() {
    return 1 > 5;
}
assert(returnTrue(), 'function é falso');

// object
const user = { ativo: false };
assert(user.ativo, 'ativo é falso');