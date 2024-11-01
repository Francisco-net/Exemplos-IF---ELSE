const rl = require('readline-sync');

const opcoes = ['Cliente Antigo', 'Cliente Novo'];
let user = rl.keyInSelect(opcoes,'Voce e um cliente novo: ', {limitMessage: 'Isto nao e uma resposta valida!'});
let preco = rl.questionFloat('Qual e o valor de sua compra: ', {limitMessage: 'Por favor insira um valor numerico'} );

if (user === -1) {
    console.log('Compra cancelada');
} else if(user === 1){
    let valorFinal = preco - (preco * 0.1);
    console.log('Cliente  Novo');
    console.log(`O valor final da sua compra foi de R$${valorFinal}`);
}else{
    let valorFinal = preco - (preco * 0.05);
    console.log('Cliente Antigo');
    console.log(`O valor final da sua compra foi de R$${valorFinal}`); 
}



