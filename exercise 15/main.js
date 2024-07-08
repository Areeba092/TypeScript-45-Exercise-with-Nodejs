var guestList = ["Fatima", "Aqsa", "Alisha"];
var dontCome = guestList[0];
console.log(dontCome, "Nai Ahh Skti");
guestList.splice(0, 1, "Fiza");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to dinner with me")); });
