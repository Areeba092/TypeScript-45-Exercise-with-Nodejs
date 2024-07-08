// Creating a Array
let userNames = ["Areeba", "Aqsa", "Alisha", "Fatima", "Laiba"];

// Using forEach Loop on Array

userNames.forEach(oneUser =>{
    if(oneUser === "Fatima"){
       console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})