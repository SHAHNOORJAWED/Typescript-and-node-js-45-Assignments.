
// TASK NO 1
//Install Node.js, TypeScript and VS Code on your computer.
//TASK NO 2.
/*Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple,
 such as, “Hello Eric, would you like to learn some Python today?”/*

//let personName:string = "Eric";
//console.log("Hello Eric, would you like to learn some python today?");

//TASK NO 03

/*Name Cases: Store a person’s name in a variable, and then print that person’s name
in lowercase, uppercase, and titlecase.*/
//let personName: string = "ShahnoorJawed";
//in lowercase
//console.log("lowercase:",personName.toLowerCase());
//in uppercase
//console.log("uppercase:",personName.toLocaleUpperCase());
//tittle case
//console.log("titlecase:",personName.replace(/\b\w/g,c=> c.toUpperCase()));
//TASK NO 4
/*Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of
 its author. Your output should look something like the following, including the quotation
  marks:

Albert Einstein once said, “A person who never made a mistake never tried anything new.”*/
//let quote:string = "A person who never madea mistake never tried anything new."
//let author:string ="Albert Einstein";
//console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.");
//TASK NO 5
/*Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called
 famous_person. Then compose your message and store it in a new variable called message. Print your message.*/
//let famous_person: string = "Albert Einstein";
//let message : string =("Albert Einstein once said, “A person who never made a mistake never tried anything new.")
//console.log(message);
//TASK NO 6
/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the
 name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the
 whitespace around the name is displayed. Then print the name after striping the white spaces.*/
//let personName: string = "\t\n   Shahnoor  Jawed  \n\t";
//console.log("original :", personName);
//console.log("stripped:", personName.trim());
//TASK NO 7 & 8
/*Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the
 number 8. Be sure to enclose your operations in print statements to see the results.

                                           OR
You should create four lines that look like this:

console.log(5 + 3)

Your output should simply be four lines with the number 8 appearing once on each line.*/
//console.log(5 +3)
//console.log(10-2)
//console.log(4*2)
//console.log(16/2)
//TASK NO 9
/*Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that
 reveals your favorite number. Print that message.*/
// let favoriteNumber: number = 9
//console.log("My favourite Number is 9");
//TASK NO 10
/*Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
 If you don’t have anything specific to write because your programs are too simple at this point,
  just add your name and the current date at the top of each program file.
   Then write one sentence describing what the program does.*/
//Author : [ShahnoorJawed]
//Date   : [Saturday, May 25 , 2024]
//Task 09: Printing My favourite Number.
//let favoriteNumber: number = 9
// Reveling My favourite number in amessage formate.
//console.log("My favourite Number is 9");
//TASK NO 11
/*Names: Store the names of a few of your friends in a array called names.
 Print each person’s name by accessing each element in the list, one at a time.*/
//let names : string[] = ["Ali", "Talha","yosuf","zain"];
//console.log(names[0]);
//console.log(names[1]); 
//console.log(names[2]);
//console.log(names[3]);
//TASK NO 12
/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
 print a message to them. The text of each message should be the same,
  but each message should be personalized with the person’s name.*/
//let names : string[] = ["Ali", "Talha","yosuf","zain"];
// let message : string = "you are my best friend."
//console.log(names[0] + " " + message);
//console.log(names[1] + " " + message);
//console.log(names[2] + " " + message);
//console.log(names[3] + " " + message);
//TASK NO 13
/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 and make a list that stores several examples. Use your list to print a series of statements about these items,
  such as “I would like to own a Honda motorcycle.”*/
// let transportation : string [] = ["Honda Motercyle", "Honda civic","Audi"];
//console.log("I would like to own a Honda Motorcycle.");
//console.log( "I would like to own a Honda civic");
//console.log("I would like to own a Audi");
//TASK NO 14
/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
 Make a list that includes at least three people you’d like to invite to dinner.
  Then use your list to print a message to each person, inviting them to dinner.*/
//let GuestArr : string[] = ["Ali","yosuf","zain"];
//console.log("Dear Ali , you are invited to the dinner");
//console.log("Dear yousuf , you are invited to the dinner");
//console.log("Dear zain , you are invited to the dinner");
//TASK NO 15
/* Changing Guest List: You just heard that one of your guests can’t make the dinner,
 so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
 
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
//let guestArr : string[] = ["Ali","yosuf","zain"];
//let  canNotAttend : string = "yosuf";
//console.log(canNotAttend +" " ,"can not attend the dinner");
//let newGuest :string = "mariyam";
//guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr)
//console.log("Dear Ali", "you are invited to the dinner");
//console.log("Dear Mariam", "you are invited to the dinner");
//console.log("Dear Zain", "you are invited to the dinner");
/* TASK NO 16

More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people
that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. •
 Print a new set of invitation messages, one for each person in your list.*/
//PART 01 
/*let guestArr : string[] = ["Ali","Mariam","zain"];

let canNotAttend : string = "Ali";

let newGuest :string = "Bilal";

guestArr [guestArr.indexOf(canNotAttend)] = newGuest;

console.log(guestArr)

console.log("Dear Bilal", "I found a bigger table so I am invited more guest ");
console.log("Dear Mariam", "I found a bigger table so I am invited more guest ");
console.log("Dear Zain", "I found a bigger table so I am invited more guest ");

// PART 02

let addGuestBeg : string = "Kamran"
guestArr.unshift(addGuestBeg);
console.log(guestArr);

// PART 03
let middleGuest : string = "Zahid"
let middleIndex = guestArr.length/2
guestArr.splice(middleIndex,0,middleGuest)
console.log(guestArr)

// PART 04

guestArr.push("Zia")
console.log(guestArr)

// PART 05

console.log("Kamran", "Bilal", "Zahid", "Mariam", "zain", "Zia" );
console.log("Dear Bilal you are invited to the dinner ");
console.log("Dear Zahid you are invited to the dinner");
console.log("Dear Mariam you are invited to the dinner");
console.log("Dear zain you are invited to the dinner");
console.log("Dear Zia you are invited to the dinner" ); */
//TASK NO 17
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
 print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your
program.*/
// Initial list of guests.
/*let guests :string[] =["jhon" , "Adil", "Hamza", "Qasim","zia" ];

//Informing that only two people can be invited.
console.log("Sorry Due to limited space, only two people can be invited for dinner");

// Removing guests until only two name remain
while(guests.length > 2) {
  const removedGuest = guests.pop();
  console.log(`sorry,${removedGuest},you are no longer invited to dinner.`)
}

// Printing inviations to the remaining two guests)

 guests.forEach((guests) => {
  console.log(`Dear ${guests}, you are still invited to dinner.`);
 })
  
 //Removing the last two names from the list
 guests.pop()
 guests.pop()

// Printing the final list to confirm it is empty
console.log("Final guest list :" , guests)*/
// TASK NO 18
/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
/*Store the place in an Array.
let placeToVisit :string [] = ["Pakistan" , "Canada" , "Paris" , "America" , "Turkey"]

// Print the Arry its Original order
console.log("Original Order:" , placeToVisit);

// Print the Arry in alphabatic order without modifying the actual list.
console.log(" Alphabatical order:", [...placeToVisit] . sort());

// Show that the Array is still in its original order.
console.log("Original order after sorting:" , placeToVisit);

// Print the Array  in reverse alphabatical order without changing the order of the original list.
console.log("Reverse Alphabatical order :" , [...placeToVisit] . sort().reverse());

//Show that your array is still in its original order by printing it again.
console.log("Original order after reverse sorting:" , placeToVisit);

//Reverse the order of your list. Print the array to show that its order has changed.
placeToVisit.reverse();
console.log("Reversed order:", placeToVisit);

//Reverse the order of your list again. Print the list to show it’s back to its original order.
placeToVisit.reverse();
console.log("Back  to original order:" , placeToVisit);

//sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placeToVisit.sort();
console.log("Sorted in alphabatical order:", placeToVisit);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
placeToVisit.sort((a,b) => b.localeCompare(a));
console.log("Stored in reverse alphabatical order:" , placeToVisit);*/
//TASK NO 19
/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people
 you are inviting to dinner.*/
/*let inviations : string [] =["Jhaon" , "Adil"];
let count_invitation : number = inviations.length

console.log(`${count_invitation} peoples will come to the dinner.`)*/
// TASK NO 20
/*Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages,
 or anything else you’d like. Write a program that creates a list containing these items.*/
/*let languages : string[] =["Urdu" , "Sindhi" , "panjabi"];
console.log("List of languages :");
console.log(languages);*/
// TASK NO 21
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
/*let person : {name:string, age:number , Educatiom: string}=
{name:"Shahnoor", age: 25, Educatiom:"MSC"};
console.log(person);*/
// TASK NO 22
/*Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
 Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.*/
/*const days : string [] =["Monday", "Tuesday", "Wednesday" ,"thursday", "Friday", "Saturday" , "Sunday"]
//console.log(days{7}) //THIS IS SHOW THE ERROR.
console.log(days[7]);*/
//TASK NO 23
/* Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let car = "subaru";

console.log(" is car == 'subaru'? predict true")
console.log(car == 'subaru');

console.log("is car != 'Honda City'? predict true.")
console.log(car != 'Honda City');

console.log(" is car == 'Subaru'? predict false")
console.log(car == 'Subaru');

console.log(" is car == 'SUBARU'? predict false")
console.log(car == 'SUBARU');

console.log("is car.length == 3? predict false.");
console.log(car.length==3);

console.log("is car.length != 10? predict true.");
console.log(car.length!=10);

console.log("is 10 > 45 ? predict false. ");
console.log(10 > 45);

console.log("is 3<=3 ? predict tre. ");
 console.log(3<=3) ;

console.log("is 72<=63 ? predict false. ");
 console.log(72<=63) ;

console.log(" is car == 'subaru' && car.length == 6 ? predict true")
console.log(car == 'subaru' && car.length == 6 );
*/
//TASK NO 24
/* More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
//  let name_1 : string = ("shahnoor");
//  let name_2 : string = ("ali ") ;
//  let name_3 : string = ("zAIN ");
//  if (name_1 == name_3){
//   console.log("names are equal.")
//  }else{
//   console.log("names are not equal.")
//  };
//  if (name_1 != name_2){
//   console.log("names are equal.")
//  }else{
//   console.log("names are not equal.")
//  }; 
// if (name_1 != name_3){
//      console.log("names are equal.")
//     }else{
//      console.log("names are not equal.")
//     }; 
let age_1 = 18;
let age_2 = 22;
// if (age_1 == 18){
//   console.log('eligible for vote.')
// } else{
//   console.log("not eligible for vote")
// };
// if (age_1 != 22) {
//   console.log("eligible for vote in older category")
// };
// if (age_1 <= age_2){ // less then
//   console.log("younger")
// };
// if(age_2 >= age_1){ // greeater then
//   console.log("older")
// };
// if (age_1 == 18 &&  age_2 == 22){
//   console.log(" person is eligible for vote.")
// };
// if(age_1 ==18 || age_2 !=22){
//   console.log("person is not eligible for vote.")
// }
let country = ["PAKISTAN", "INDIA", "JAPAN", "CHINA"];
//If (country.includes("pakistan")){
//console.log("pakistan is in country list")}
//if (!country.includes ("AMRICA")){
//console.log("Amrica is not include in an array")
//}
// TASK NO 25
/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.*/
//let alien_color : string = "green"
//if ( alien_color == "green")
// console.log ("you earn 5 points")
//let alien_color : string = "red"
//if (alien_color == "green")
// console.log ("no output")
// TASK NO 26 
/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/
//let alien_color = "green"
//if (alien_color == "green"){
//console.log ("player just earned 5 points for shooting the alien")
//} else{
// console.log("player just earned 10 points")
//}
//let alien_color = "red"
//if (alien_color == "green"){
//console.log("player just earned 5 points for shooting the alien")
//}else {
//console.log("player just earned 10 points")
//}
// TASK NO 27
/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/
//let alien_color : string ="red"
//if (alien_color == "green"){
//console.log("5 points")
//} else if (alien_color == "yellow"){
// console.log("10 points")
//}else{
//console.log("15 points")
//}
// TASK NO 28
/*Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.*/
//task 28 ............................2,4,13,20,65,older
/*let age : number = 69

if (age <2){
  console.log("you are a baby")
}else if (age <4){
  console.log("you are a toddler")
} else if(age < 13){
console.log("you are a kid")
} else if (age < 20){
  console.log("you are a teenager")
}else if (age < 65){
  console.log("you are a adult")
}else {
  console.log("you are older")
}*/
// TASK NO 29
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print
 a statement, such as You really like bananas!*/
/*let favorite_fruits : string [] = ["kivi","orange","apple","berry","peach"]

if (favorite_fruits.includes("kivi")){
 console.log("kivi")
}

if (favorite_fruits.includes("apple")){
 console.log("apple")
}
if (favorite_fruits.includes("orange")){
 console.log("orange")
}

if (favorite_fruits.includes("berry")){
 console.log("you really like bananas")
}

if (favorite_fruits.includes("peach")){
 console.log("you really like banana")
}*/
// TASK no 30
/*Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
/*let users : string [] =["eric","haseeb","ali","fatima","admin"]

for (let user of users){
  if (user === "admin"){
    console.log("Hello admin , would you like to see a status report?")
  }else {
    console.log(`Hello ${user}, thank you for logging in again`)
  }
}*/
// TASK no 31
/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
/*let Users : string [] = ["eric","haseeb", "ali" , "fatima", " admin"]

if (Users.length === 0){
  console.log("We need to find some users!")
}else {
  for (let user of Users){
    if( user === "admin"){
      console.log("Hellow admin, would you like to see a status report?")
    }else {
      console.log(`Hello ${user}, thank you for logging in again`)
    }
  }
}

Users = []
if (Users.length === 0){
  console.log("we need to find some users!")
}*/
// TASK NO 32
/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.]*/
/*let current_users : string [] = ["admin","Eric", " Ali", "Hamza", "fatima"]
let new_users : string [] = ["admin", "fatima", "Aliza", "Hasseb", "Noor"]

let current_users_lower : string [] = current_users.map(user => user.toLocaleLowerCase())

for (let new_user of new_users){
  if (current_users_lower.includes(new_user.toLocaleLowerCase())){
    console.log(`Sorry ${new_user},that name is taken`)
  } else{
    console.log(`Yes ${new_user}, is still in available list`)
  }
}*/
// TASK NO 33
/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th",
 and each result should be on a separate line.*/
/*let numbers : number[] =[1,2,3,4,5,6,7,8,9]

for (let number of numbers){

 if (number ===1){
   console.log(`${number}st`) // 1st
 } else if (number ===2){
   console.log(`${numbers}nd`)// 2nd

 } else if (number === 3){
   console.log(`${number}rd`)// 3rd

 }else {
   console.log(`${number}th`)// 4th , 5th , 6th ,7th ,8th, 9th
 }
}*/
// TASK NO 34
/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of eacH
 pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have
one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines
about the kinds of pizza you like and then an additional sentence, such as I really love pizza!*/
/*let favorite_pizza : string [] = ["pepperoni", "chicken", "veg"]
// for (let pizza of favourite_pizza){
// console.log(pizzza)
//}

// console.log("\n")

for (let pizza of favorite_pizza){
  console.log(`I really like ${pizza} pizza!`)
}

console.log ("\n I really love pizza!")*/
// TASK NO 35
/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for
 loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet.
 • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals
 would make a great pet!-*/
/*let animals : string [] = ["cat", "lion" , "dog"]

for (let animal of animals){
 console.log(animal)
}
console.log("\n")

for (let animal of animals){
 console.log(`A ${animal}has a trail`)
}
console.log("\n all of these are great pets! but i love cats more")*/
// TASK NO 36
/* T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
  The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/
/*function make_Shirt(size : string, text : string) : void {
  console.log(`you order a ${size}shirt that says ${text}`)
}
make_Shirt(`large`,`"i love typescript"`)
make_Shirt(`mediam` , '"i need a big shirt"')*/
//TASK NO 37
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
 I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size
 with a different message.*/
/*function make_Shirt(size : string = `large`, text : string = `I love typescript`): void{
 console.log(`you have order a ${size}, shirt that says ${text}`)
}

//   make_Shirt();
// make_Shirt("medium")

//different message
make_Shirt(`small`, `I need a big shirt to wear`)*/
// TASK NO 38
/*Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence,
 such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of
  which is not in the default country.*/
/*function describe_city(city: string, country: string =`Pakistan`) : void{
 console.log( `${city} is in ${country}`)
}

describe_city(`karachi`)// default sentence)
describe_city(`france`,`europe`)
describe_city(`lahore`, `punjab`)*/
//TASK NO 39
/*City Names: Write a function called city_country() that takes in the name of a city and its country. T
he function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
/*function cityCountry(city: string, country: string): string{
  return`${city},${country}`
}

let c1 = cityCountry(`lahore`, `pakistan`)
let c2 = cityCountry(`tokyo`, `japan`)
let c3 = cityCountry(`paris`, `france`)

console.log(c1)
console.log(c2)
console.log(c3)*/
// TASK NO 40
/*Album: Write a function called make_album() that builds a Object describing a music album. The function
 should take in an artist name and an album title, and it should return a Object containing these two pieces
  of information. Use the function to make three dictionaries representing different albums. Print each
  return value to show that Objects are storing the album information correctly. Add an optional parameter
   to make_album() that allows you to store the number of tracks on an album. If the calling line includes
   a value for the number of tracks, add that value to the album’s Object. Make at least one new function
   call that includes the number of tracks on an album.*/
/*function makeAlbum( artist: string, title: string): {artist: string;title:string}{
 const dictionaries = {
   artist: artist.charAt(0).toUpperCase() + artist.slice(1),
 title: title.charAt(0). toUpperCase() + title.slice(1) }
 return dictionaries;
}

let album = makeAlbum("ali", "light")
 console.log(album)

 album = makeAlbum("bilal", " red wave")
 console.log(album)

 album= makeAlbum("hamza", "seenbreez")
 console.log(album)*/
// TASK NO 41
/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in
the array.*/
/*function show_magicians(magicians : string []): void {

   for (const magician of magicians){
     console.log(magician.charAt(0).toLocaleLowerCase() + magician.slice(1));
   }
 }

 const magician: string[] = ["Ali", " Hamza", "BilalL"];
 show_magicians(magician)*/
// TASK NO 42
/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians
 by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
/* function make_great(magicians : string[]): void {
  for (let i =0; i < magicians.length; i ++){    // i satnd for index string
    magicians[i] = magicians[i] + 'the great'
  }
 }

 const magician2: string [] = ["usman", "haseeb", "wajahat"];
 make_great(magician2)
 console.log(magician2)*/
// TASK NO 43
/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
with a copy of the array of magicians’ names. Because the original array will be unchanged,
return the new array and store it in a separate array. Call show_magicians() with each array
 to show that you have one array of the original names and one array with the Great added to each magician’s
 name.*/
/*function make_great2(magicians:string []): string[]{
        const greatMagicians : string []= [];
        for (let i =0; i < magicians.length;i++){
          greatMagicians.push(magicians[i]  + ' the Great');
        }
        return greatMagicians;
      }

      const magicians3: string[] = ["usman", "haseeb","wajahat"];
      const greatMagicians2: string[] = make_great2(magicians3)
      console.log(magicians3);
      console.log(greatMagicians2);*/
// TASK NO 44
/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 The function should have one parameter that collects as many items as the function call provides,
  and it should print a summary of the sandwich that is being ordered. Call the function three times,
   using a different number of arguments each time.*/
/* function sandwich(...items: string[]): void {
  console.log("sandwich order:");

  for (let i = 0; i < items.length; i++) {
      console.log(`- ${items[i]}`);
  }
}

console.log("enjoy your sandwich shahnoor");

sandwich('capsicum', 'tomato', 'chicken');
sandwich('beef', 'cheese');
sandwich('garlic chicken', 'mayo sauce');*/
// TASK NO 45
/*Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It should then accept an
arbitrary number of keyword arguments. Call the function with the required information and two
other name-value pairs, such as a color or an optional feature. Print the Object that’s returned
to make sure all the information was stored correctly.*/
/*type Car = {
  manufacture: string;
  model: string;
  [key: string]: any;
};

function createCar(manufacture: string, model: string, optional: Record<string, any>): Car {
  return {
      manufacture,
      model,
      ...optional
  };
}

const mycar: Car = createCar("TOYOTA", "corolla", { colour: "silver", year: 2024 });
console.log(mycar);*/
