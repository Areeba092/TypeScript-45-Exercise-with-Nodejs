// Creating  a Guest List Array
var guestList = ["Areeba", "Fatima", "Aqsa", "Alisha"];
//making variable for those guest who cant come
var dontCome = guestList[0];
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
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Osama");
// Print Message of Updated List
console.log("Updated Listof our Guest");
//Sending a invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to dinner with me")); });
// Inform that only two guests can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so i can only invite two guests to dinner with me");
// Using while.Loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I cant invite you to dinner"));
}
//Sinding a invitations to the lasttwo guest on the list
console.log(" Invitations to the last 2 Guest");
guestList.forEach(function (lasttwo) { return console.log("Lucky ".concat(lasttwo, ", you are still invited to dinner")); });
// Removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
