const fs = require('fs');

const read = fs.readFileSync('./personData.json');

const parsedData = JSON.parse(read.toString());

////Get all people who live in a specific city, ordered by age/////
const over30Sorted = parsedData.filter(item => item.address.city === 'Berkhout').sort((a, b) => a.Age - b.Age);
// console.log(over30Sorted);

////Get all people who live in the city with the most people in it ////////
const cityList = parsedData.reduce((acc, curr) => {
  acc[curr.address.city] = acc[curr.address.city] ? acc[curr.address.city] + 1 : 1;
  return acc;
}, {});
// console.log(Object.entries(cityList).sort((a,b) => b[1] - a[1])[0][0]);

/////Get all children of everyone who lives in a specific city ordered by age/////
const childrenOfCity = parsedData.filter(p => p.address.city === 'Berkhout').map(p => p.Children).flat().map(p => ({
  Name: p.Name,
  Age: p.Age
})).sort((a, b) => a.Age - b.Age);
// console.log(childrenOfCity);

////Get all people with a name that starts with L and has children////
const lPeopleWithChildren = parsedData.filter(p => p['full name'].startsWith("L") && p.Children?.length > 0).map(p => p['full name']);
console.log(lPeopleWithChildren)
