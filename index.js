const fs = require('fs');

const read = fs.readFileSync('./personData.json');

const parsedData = JSON.parse(read.toString());

console.log(parsedData.forEach( element => element.address ));
