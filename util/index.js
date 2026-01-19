const { inspect, format } = require('node:util');


// format();
// serve para ter domínio total de um log.

// const log = format('%s %s','eu vou cagar de', 19, 'horas');
// console.log(log);

const myName = format('Name: s%', 'Júlio');
const myInformations = format('User: %s | Age: %d', 'Júlio', 18)
const messageLog = format(
  '[%s] %s - %s',
  'INFO',
  'auth-service',
  'User logged in'
);
console.log(myName + '\n', myInformations + '\n', messageLog,);

console.log('');
// util.format()

const user = {
  id: 1,
  profile: {
    name: 'Júlio',
    skills: {
        iLike: {
            any: ['Node', 'HTML', 'CSS', 'JAVASCRIPT', 'Linux,']
        },
        anyAdd: ['Jogar Bola', 'Interagir']
    }
    }
}
const me = inspect(user, { depth: 2, colors: true });
console.log(me);




// util.format()
// Recebe: string + valores
// Retorna: string
// Serve para: logs padronizados

// util.inspect()
// Recebe: objeto + opções
// Retorna: string
// Serve para: debug e logs de objetos