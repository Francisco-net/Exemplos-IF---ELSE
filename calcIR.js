const rl = require('readline-sync');

let salario = rl.questionFloat('Qual seu salario ', {limitMessage:'Por favor insira um valor numerico!'});


if (salario < 2500) {
    let imposto = salario * 0.10;
    console.log(`  A taxa de imposto sobre seu salário sera de 10%, 
    logo você terá que pagar R$${imposto} de imposto`)
} else {
    let imposto = salario * 0.20;
    console.log(`A taxa de imposto sobre seu salário sera de 20%,
    logo você terá que pagar R$${imposto} de imposto`)
}

