function create_car(manufacture, model, ...options){
    let car = {
        manufacture: manufacture,
        model: model,
    };

// Add additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;
}

// Call the function to create a car object
let my_car = create_car("Toyota", "Corrolla", "color: Black", "Sunroof: True")

// Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);

