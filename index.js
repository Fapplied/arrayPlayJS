const fs = require('fs');

const read = fs.readFileSync('./personData.json');

const parsedData = JSON.parse(read.toString());

// parsedData.forEach( element => console.log(element.address));

// const over30 = parsedData.filter(item => item.address.city === 'Berkhout');
// console.log(over30);

const cityList = parsedData.reduce((acc, curr)=>{
 acc[curr.address.city] = acc[curr.address.city] !== undefined ? acc[curr.address.city] + 1 : 1 ;
 return acc;
},{})

console.log(cityList);