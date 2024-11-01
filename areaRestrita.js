const rl = require('readline-sync');


let idade = rl.questionFloat('Indique a sua idade: ', {limitMessage: 'Por favor insira um valor numerico'} );

if(idade >= 18){
    console.log('Você pode acessar o puteiro.');
}else{
    console.log('Você NÃO pode acessar o puteiro.');
};

