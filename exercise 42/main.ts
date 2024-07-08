// Define the function to show magnicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians names
let magician_names = ["Hurry Poter", "Hamza", "Areeba"]

make_great(magician_names);

let great_magician = make_great(magician_names);

//console.log(great_magician)
show_magicians(great_magician);