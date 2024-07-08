let personName = "Areeba Qureshi";
console.log(personName.toLowerCase());

console.log(personName.toUpperCase());

console.log(personName.replace(/\b\w/s, (char) => char.toUpperCase()));