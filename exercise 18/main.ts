// Making a Array of Countries and Print its Orignal Order
let countriesToVisit: String[] =["China", "Denmark", "Brazil", "Argentina"];
console.log("Orignal Order:", countriesToVisit);

//Print the Array in Alphabetical Order without modifying the Actual Array List
console.log("Alphabetical Order:", [...countriesToVisit].sort());

// Show that the Array is still in its orignal order
console.log("Still in Original:", countriesToVisit);

// Print the Array in Reversed Order without modifying the Actual Array List 
console.log("Reverse Order:", [...countriesToVisit].reverse());

// Show that the Array is still in its orignal order
console.log("Still in Orignal:", countriesToVisit);

// we have changed the orignal array order now
console.log("Orignal Array Reversed:", countriesToVisit.reverse());

// Print the Array to show that its back to its orignal order
console.log("Back to Orignal Order:", countriesToVisit.reverse());

// Print the array to show that its order has been changed in alphabetical order now 
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());

// we have changed again the orignal array order now in reverse order again
console.log("Orignal Array Reversed Again:", countriesToVisit.reverse());

