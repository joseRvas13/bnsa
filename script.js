const readline = require ('readline');
const rl =readline.create.createInterface({
    input:  process.stdin, 
    output: process.stdout
});

rl.question('por favor digite nombre',(nombre)=>{
    rl.question('digite el apellido',(apellido)=>{
        console.log('sunombre es ${nombre} y su apellido es ${apellido}');
        rl.close();
    });
});
