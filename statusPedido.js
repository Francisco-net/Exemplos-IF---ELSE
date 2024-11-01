const rl = require('readline-sync');

let pedido = {
    nome: 'marmita',
    preco: 29.90,
    status: null
};

const opcoes = [ 'em preparacao', 'em rota', 'entregue'];
const check = rl.keyInSelect(opcoes,'Qual o status do pedido do cliente: ', {limitMessage: 'Isto nao e uma resposta valida'});

if(check === -1){
    console.log('Cancelado com sucesso');
}else{
    console.log(`O pedido do cliente esta ${opcoes[check]}`);
};






