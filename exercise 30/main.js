// Creating a Array
var userNames = ["Areeba", "Aqsa", "Alisha", "Fatima", "Laiba"];
// Using forEach Loop on Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Fatima") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
