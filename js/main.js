//Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 

const bikes = [
    {
        name : "A",
        weight : 5
    },
    {
        name : "B",
        weight : 7
    },
    {
        name : "C",
        weight : 3
    },
    {
        name : "D",
        weight : 12
    },
    {
        name : "E",
        weight : 8
    },
    {
        name : "F",
        weight : 4
    },
    {
        name : "G",
        weight : 10
    },
    {
        name : "H",
        weight : 6
    },
];

// Trova la bici con peso minore
let minWeight = bikes[0].weight;
let bikeArrayNumber = bikes[0];

for (let i = 1; i < bikes.length; i++) {
  if (bikes[i].weight < minWeight) {
    minWeight = bikes[i].weight;
    bikeArrayNumber = bikes[i];
  }
}

// Stampa la bici con peso minore
const { name, weight } = bikeArrayNumber;
console.log(`La bici più leggera è ${name} con un peso di ${weight} kg.`);