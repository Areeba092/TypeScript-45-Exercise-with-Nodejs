let guestList = ["Fatima", "Aqsa", "Alisha"];

let dontCome = guestList[0];

console.log(dontCome, "Nai Ahh Skti");

guestList.splice(0, 1, "Fiza");

guestList.forEach(guest => console.log(`Salam ${guest}, would you like to dinner with me`));