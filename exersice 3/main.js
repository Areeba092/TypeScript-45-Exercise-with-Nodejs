var personName = "Areeba Qureshi";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/s, function (char) { return char.toUpperCase(); }));
