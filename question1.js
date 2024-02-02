/* Conditional statements are used in programming to make decisions based on 
certain conditions. The most common types are if, else if, and else. Here 
is the syntax:
*/

if (condition) {
    // code to be executed if the condition is true
} else if (anotherCondition) {
    // code to be executed if the first condition is false and this condition is true
} else {
    // code to be executed if none of the above conditions are true
}


//examples

let marks = 85;

if (marks > 90) {
    console.log("A Grade");
} else if (marks > 70 && marks <= 90) {
    console.log("B Grade");
} else if (marks > 50 && marks <= 70) {
    console.log("C Grade");
} else {
    console.log("F Grade");
}
