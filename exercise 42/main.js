// Define the function to show magnicians names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names
var magician_names = ["Hurry Poter", "Hamza", "Areeba"];
make_great(magician_names);
var great_magician = make_great(magician_names);
//console.log(great_magician)
show_magicians(great_magician);
