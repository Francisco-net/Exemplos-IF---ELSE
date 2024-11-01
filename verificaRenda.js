const rl = require('readline-sync');

let renda = rl.questionFloat('Qual e sua renda mensal: ', {limitMessage:'Por favor insira um valor numerico!'});

if (renda >= 2000) {
    console.log('Você é elegível');
} else {
    console.log('Você não é elegível');
};