const fs = require(`fs`)

const carro = {
    modelo : 'Gol',
    marca : 'Volkswagen',
    ano : '2002'
}

carroJSON = JSON.stringify(carro);

fs.writeFileSync('carro.json', carroJSON)

const carroContent = fs.readFileSync("carro.json");

console.log(carroContent);

const carroDeVoltaComoObjeto = JSON.parse(carroContent.toString())
carroDeVoltaComoObjeto.modelo = "Voyage";

console.log(carroDeVoltaComoObjeto);