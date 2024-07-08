let userNames = ["Areeba", "Aqsa", "Alisha", "Fatima", "Laiba"];
userNames = []

if(userNames.length === 0){
       console.log("Your Array in Empty We need to find some users!")
}else{
    userNames.forEach(oneUser =>{
        if(oneUser === "Fatima"){
            console.log(`Hello ${oneUser}, would you like to seea stutas report?`)
        }else{
            console.log(`Hello ${oneUser}, thank you for logging in again.`)
        }
    })
}