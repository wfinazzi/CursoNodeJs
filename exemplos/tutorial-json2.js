const fs = require(`fs`)

//OBJETO CRIADO
const pessoa = {
    nome : 'Biharck',
    sobrenome : 'Araujo',
    idade : 32
}

//CONVERTER O OBJETO CRIADO EM JSON
const pessoaJSON = JSON.stringify(pessoa)

//GRAVAR EM UM ARQUIVO O CONTE�DO
fs.writeFileSync('pessoa.json', pessoaJSON);

//recuperar o conte�do do arquivo Json

const pessoaContent = fs.readFileSync('pessoa.json');

console.log(pessoaContent.toString());

const pessoaDeVoltaComoObjeto = JSON.parse(pessoaContent.toString())

pessoaDeVoltaComoObjeto.nome = 'John';
console.log(pessoaDeVoltaComoObjeto)
console.log(pessoaDeVoltaComoObjeto.nome)

