// var s = new String("dummy"); //Creates a String object
// console.log(s); //"dummy"
// console.log(typeof s); //"object"
// var nonObject = "1" + "2"; //Create a String primitive
// console.log(typeof nonObject); //"string"
// var objString = new String("1" + "2"); //Creates a String object
// console.log(typeof objString); //"object"
// //Helper functions
// console.log("Hello".length); //5
// console.log("Hello".charAt(0)); //"H"
// console.log("Hello".charAt(1)); //"e"
// console.log("Hello".charAt(1)); //"e"
// console.log("Hello".indexOf("e")); //1
// console.log("Hello".lastIndexOf("l")); //3
// console.log("Hello".startsWith("H")); //true
// console.log("Hello".endsWith("o")); //true
// console.log("Hello".includes("X")); //false
// var splitStringByChars = "Hello World".split("");
// console.log(splitStringByChars); //["H", "e", "l", "l", "o", " ","W", "o", "r", "l", "d"]
// console.log("lowercasestring".toUpperCase()); //"LOWERCASESTRING"
// console.log("UPPPERCASESTRING".toLowerCase());
// //"upppercasestring"
// console.log("There are no spaces in the end ".trim());
// var s = new String("dummy"); //Creates a String object
// console.log(s); //"dummy"
// console.log(typeof s); //"object"
// var nonObject = "1" + "2"; //Create a String primitive
// console.log(typeof nonObject); //"string"
// var objString = new String("1" + "2"); //Creates a String object
// console.log(typeof objString); //"object"
// //Helper functions
// console.log("Hello".length); //5
// console.log("Hello".charAt(0)); //"H"
// console.log("Hello".charAt(1)); //"e"
// console.log("Hello".charAt(1)); //"e"
// console.log("Hello".indexOf("e")); //1
// console.log("Hello".lastIndexOf("l")); //3
// console.log("Hello".startsWith("H")); //true
// console.log("Hello".endsWith("o")); //true
// console.log("Hello".includes("X")); //false
// var splitStringByChars = "Hello World".split("");
// console.log(splitStringByChars); //["H", "e", "l", "l", "o", " ","W", "o", "r", "l", "d"]
// console.log("lowercasestring".toUpperCase()); //"LOWERCASESTRING"
// console.log("UPPPERCASESTRING".toLowerCase());
// //"upppercasestring"
// console.log("There are no spaces in the end ".trim());
// function isAllowedToDrive(age){
//     if(age>21){
//     return true;
//     }else{
//     return false;
//     }
//     }
//     console.log(isAllowedToDrive(22));
//     function sayDay(day){
//     switch(day){
//     case 1: console.log("Sunday");
//     break;
//     case 2: console.log("Monday");
//     break;
//     default:
//     console.log("We live in a binary world. Go to Pluto");
//     }
//     }
//     sayDay(1); //Sunday
//     sayDay(3);
// function add(a, b) {
//     return a + b;
// }
// c = add(1, 2);
// console.log(c);

// var add = function (a, b) {
//     return a + b;
// }
// c = add(1, 2);
// console.log(c);

// function changeCase(val) {
//     return val.toUpperCase();
// }
// function demofunc(a, passfunction) {
//     console.log(passfunction(a));
// }
// demofunc("smallcase", changeCase);

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    address: [
        'address1',
        'address2'
    ]
  }
  console.log(person.age, person.firstName,person.address[1])