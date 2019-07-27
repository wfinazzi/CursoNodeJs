const pessoa = {
    nome : 'Biharck',
    sobrenome : 'Araujo',
    idade : 32
}

console.log('Objeto JS')
console.log(pessoa)
console.log(pessoa.nome)

const pessoaJSON = JSON.stringify(pessoa)

console.log('JSON')
console.group(pessoaJSON)
console.log(pessoaJSON.nome)

const pessoaJSONTopessoa = JSON.parse(pessoaJSON);

console.log('Objeto JS de volta')
console.log(pessoaJSONTopessoa)
console.log(pessoaJSONTopessoa.nome)