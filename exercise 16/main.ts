// Creating  a Guest List Array
let guestList = ["Areeba", "Fatima", "Aqsa", "Alisha"];

//making variable for those guest who cant come
let dontCome = guestList[0];
//print the name of guest who cant come
console.log(dontCome, "Nahi Ahh Sakti Hai");

//Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Alisbha");

//Message Print for Bigger Table
console.log("Good News ! We have a Found a Bigger Table For Dinner");

// Adding a new guest at starting index of array
guestList.unshift("Ali");

// Adding a new guest at ending index of array
guestList.push("Zain");

// Get a middle index of our guest list array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Osama");
// Print Message of Updated List
console.log("Updated Listof our Guest");
//Sending a invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));