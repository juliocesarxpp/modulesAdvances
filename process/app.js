// Minimum boot requirements for a Node application.

// 1) Id of process
process.stdout.write(`PID of process: ${process.pid}\n`);
process.stdout.write(`Dir actually: ${process.cwd()}\n\n`);

// 2) Read the arguments of command line
const args = process.argv.slice(2)
// Search argument --port=XXXX
let port;

for (const arg of args) {
    if (arg.startsWith('--port=')) {
        port = arg.split('=')[1];
    }
};

// 3) Valid port
if (!port) {
    process.stderr.write('ERROR: port not informed. Use --port=3000\n');
    process.exit(1); // error = stop program
}

// 4) Valid current variable
const env = process.env.NODE_ENV;

if (!env) {
    process.stderr.write('ERROR: NODE_ENV not defined\n');
    process.exitCode = 1;
}

// 5) Show settings
process.stdout.write(`Porta configurada: ${port}\n`);
process.stdout.write(`Ambiente: ${env || 'não definido'}\n`);
process.stdout.write('Aplicação iniciada\n');

// 6) Closing event of the process
process.on('exit', (code) => {
    process.stdout.write(
        `\nProcess ${process.pid} closed with code ${code}\n`
    )
});