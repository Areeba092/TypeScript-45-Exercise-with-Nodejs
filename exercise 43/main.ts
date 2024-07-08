// Define the function to show magnicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians names
let magician_names = ["Hurry Poter", "Hamza", "Areeba"]

// Makin a copy of orignal array through .slice() function
let copy_magician_names = magician_names.slice()

// Modify the copied array to include "the great" with their names
let copy_great_magicians =  make_great(copy_magician_names);

// Show both arrays orignal and copied
// Orignal
console.log("Orignal Array\n")
show_magicians(magician_names);

// Copied
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians);