console.log is used to log (print) a message to console

console.log("Apna college");

Variable rules- case sensitive, letter,underscore or $ can be the first character, reserved words cannot be variable names

var: variable can be re declared and updated , a global scope variable
let: variables cannot be re declared but can be updated, a block scope variable
const: variables cannot be re declared or updated, a block scope variable
object-
for ex 
const student={
    fullName:"Erika mediratta",
    age:20,
    cgpa:8.2
}
student["age"]=21;
console.log(student["name"]);

but 
const name="Erika"
name="Monika"
THIS WILL GIVE ERROR BECAUSE CAN'T MAKE CHANGES TO CONST VARIABLE
BUT CAN MAKE CHANGES TO CONST OBJECT'S KEY'S VALUE 

operators - ==(equal to) and ===(equal to and type) 
!== (not equal to and type) != (not equal to)

Q Get user to input a number using prompt(“Enter a number:

”). Check if the number is a multiple of 5 or not

alert("Hello")- one time pop up
prompt("hello")- it is also a pop up but can take input

let number=prompt("Take a number")l

if(num%5===0)
{
    console.log(num, "is a multiple of 5");
}
else
{
    console.log(num, "is not a multiple of 5");
}

loops- for loop
for(let i=0;i<=5;i++)
{
    console.log("Erika");
}

infinite loop

while loop
while(condition)
{
    //
}
do- while loop
do{
    //
}while(condition)

for-in loop

for (let key in object) {
  // code
}

const person = {
  name: "Alice",
  age: 25,
  city: "Paris"
};

for (let key in person) {
  console.log(key, person[key]);
}
output-
name Alice
age 25
city Paris

for-of loop
used to iterate over values of iterable objects

for (let value of iterable) {
  // code
}

const arr = [10, 20, 30];

for (let value of arr) {
  console.log(value);
}
output-
10
20
30

in for-in, order not guaranteed whereas in for of,order is guaranteed

prompt gives a string, so convert into a number using number()

math.random generates a number between 0 and 1 

ARRAYS-
toString()- converts array to string
unshift()-add to start
push()-add to end
pop()-delete from end and return
shift()-delete from start and return 
slice()-returns a piece of the array
slice(startIdx,endIdx)
splice()-
array.splice(startIndex, deleteCount, item1, item2, ...)
to add,delete or replace
deletecount=number of elements to be deleted and item1 and item2 
are the additions at the index given
Replace elements like-
let arr = [1, 2, 3, 4];

arr.splice(1, 2, 8, 9);

console.log(arr);

output-
[1, 8, 9, 4]
let arr = [10, 20, 30, 40];

let removed = arr.splice(1, 2);

console.log(removed); // [20, 30]
console.log(arr);     // [10, 40]

FUNCTIONS-
arrow functions-
const functionName=(param1,param2...)=>{
    //
}

//forEach loop in Arrays
arr.forEach(callbackfunction)
callback is a function passed as an arguement to another function

Q for a given array of numbers, print the square of each value using the forEach loop

const arr=[1,2,3,4,5,6,7];
arr.forEach((val)=>
{
    console.log(val*val);
});

//filter method
creates a new array of elements that give true for a condition/filter

array.filter((element, index, array) => {
  return condition;
});
const arr = [1, 2, 3, 4, 5, 6];

const evenNumbers = arr.filter((val) => {
  return val % 2 === 0;
});

console.log(evenNumbers);

//DOM-
when a web page is loaded,browser creates a document object model(DOM)
of the page
//DOM MANIPULATION-
document.getElementById("myId")
document.getElementsbyClassName("myClass")
document.getElementsbyTagName("p")
//they all return an htmlcollection(like an array)


document.querySelector("#MyId/ .myClass/ tag")
//returns first element


document.querySelectorAll("#MyId/ .myClass/ tag")
//returns a nodelist

innerText- returns the text content of the element and its children

<div id="box">
  Hello 
  <span style="display:none">Secret</span>
  <span>World</span>
</div>

console.log(document.getElementById("box").innerText);

output-
Hello World



innerHTML- returns the plain text or html contents in the element,also includes hidden text unlike innerText

<div id="box">Hello <span>World</span></div>

console.log(document.getElementById("box").innerHTML);

output-
Hello <span>World</span>


textContent- returns textual content even for hidden elements

console.log(document.getElementById("box").textContent);

output-
Hello SecretWorld


<h2>Hello JavaScript</h2>
document.getElementsByTagName("h2");
//this will give something like 
[<h2>Hello JavaScript</h2>, <h2>Another heading</h2>, …]
so we have to do [0] means
document.getElementByTagName("h2")[0];

<div class="box"></div>
<div class="box"></div>
<div class="box"></div>

<script>
  const boxes = document.getElementsByClassName("box");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = "Hi Three boxes";
  }
</script>

OR
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>

<script>
  document.querySelectorAll(".box").forEach(box => {
    box.textContent = "Hi Three boxes";
  });
</script>


querySelector() → single element (no array/collection)
✔ querySelectorAll() → multiple elements as a NodeList (can loop with .forEach())
✔ getElementsByClassName()/getElementsByTagName() → multiple elements as an HTMLCollection (requires index or loop)

//Attributes
getAttribute(attr)
setAttribute(attr,value)

//insert elements
let el=document.createElement("div")

node.append(el)
node.prepend(el) //adds at the start of the node
node.before(el) //outside
node.after(el) //outside

Q create a new button element. Give it a text "click me", a background colour of red and text colour of white

insert the button as the first element inside the body tag

Ans-

// Create the button
let el = document.createElement("button");

// Set the text
el.textContent = "Click Me";

// Style the button
el.style.backgroundColor = "red";
el.style.color = "white";

// Insert as first element inside body
document.body.prepend(el);

Or
html:
<style>
  .myBtn {
    background-color: red;
    color: white;
  }
</style>

js:
let el = document.createElement("button");
el.textContent = "Click Me";
el.classList.add("myBtn");
document.body.prepend(el);


//CLASSLIST is a property of an html element that gives you a list 
of all the classs the element has 
,you can add, remove, toggle or check classes using it
add one more class, remove class, toggle(exists, then remove it, doesn't exist then add it)

ex-
html:
<div id="box" class="box"></div>
<button id="btn">Click Me</button>
css:
.red {
  background: red;
}
javasript:
const box = document.getElementById("box");

document.getElementById("btn").addEventListener("click", () => {
  box.classList.toggle("red");
});

//btn is the element you clicked
//box is the element you want to change
//btn is the trigger and box is the target



//EVENTS-

example-
btn.onclick=()=>{
  console.log("button was clicked");
}

//event object-
has detailes about the event
like e.target,e.type,e.clientX,e.clientY

node.event=(e)=>{
  //
}


//event listeners-node.addEventListener(event,callback)
node.removeEventListener(event,callback);


Q create a toggle button that changes the screen to dark-mode when clicked and light mode when clicked again

Ans-

html:
<button>Toggle Mode</button>

css:
body {
  background-color: white;
  color: black;

}

.dark-mode {
  background-color: black;
  color: white;
}
js:
let btn = document.querySelector("button");

btn.onclick = () => {
  document.body.classList.toggle("dark-mode");
};

OR 

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


//document.body.classList.toggle("dark-mode"); means
classList is a property that helps us add,remoeve or toggle CSS classes
toggle("dark-mode")means if dark mode is on, remove it, if not there,then add it

//dark mode on BODY not BUTTON because dark mode affects the whole page not just one element

//node.disabled=true; means on again clciking, the node doesnt change its innerText or whatever

//STONE PAPER SCISSORS GAME



suppose
html:
<button class="btn">Stone</button>
<button class="btn">Paper</button>
<button class="btn">Scissors</button>
<p id="result"></p>


css:
.blur {
  opacity: 0.5;
  transform: scale(0.95);
}

javascript:
const buttons = document.querySelectorAll(".btn");

//querySelectorAll gives an array-like structure, so loop over each button

const choices = ["stone", "paper", "scissors"];

buttons.forEach(button=>{
  button.addEventListener("click",()=>{

    // remove blur from all buttons, then add to clicked
    buttons.forEach(btn => btn.classList.remove("blur"));

    button.classList.add("blur");
    const userChoice=button.textContent.toLowerCase();
    const computerChoice=choices[Math.floor(Math.random()*3)];
    checkWinner(userChoice,computerChoice);

  });

});
let result=document.querySelector("#result");

let checkWinner=(user,computer)=>{
if (user === computer) {
    console.log("Draw");
  } else if (
    (user === "stone" && computer === "scissors") ||
    (user === "paper" && computer === "stone") ||
    (user === "scissors" && computer === "paper")
  ) {
    console.log("User wins");
    result.textContent="User Wins";

  } else {
    console.log("Computer wins");
     result.textContent="Computer Wins";
    

  }
}

//CLASSES AND OBJECTS

JS objects have special property called prototype

prototype can be set using __proto__

//CLASSES

class myClass{

  constructor(){} //automatically invoked by new,initialises an object
  myMethod(){}
}
let myObj=new myaClass();

//inheritence- passing down properties and methods from parent class to child class

class Parent{}

class child extends Parent{

}
//if child and parent have same method, child's method will be used
(method overriding)

//super keyword- used to call the constructor of its parent class to access the parent's properties and methods

super(args) //calls Parent's constructor

super.parentMethod(args);

Q you are creating a website for your college, create a class User with two properties, name and email. It also has a method called viewData() that allows user to view website data

Ans-

class User{
  //constructor

  User(name,email)
  {
    this.name=name;
    this.email=email;

  }

  //method

  viewData()
  {
    console.log("Veiwing website data");

  }
}

//example-

let user1=new User("Erika","erikamediratta@gmail.com");
user1.viewData();


Q2 create a new class Admin which inherits from user. Add a new method called editData to Admin that allows it to edit website data

Ans-

class Admin extends User{

  //constructor 
  
  constructor(name,email)
  {
    super(name,email);//used to call the User's constructor
  }

  //method
  editData()
  {
    console.log("Editing website data");
  }

}

//example-

let admin1 =new Admin("Monika","monikamediratta@gmail.com');
admin1.editData();
admin1.viewData(); //inherited from User


//ERROR HANDLING-

try-catch

try{
  ...
}catch(err){
  //err is error object 
  //handling error
}

for example-

try{
  let result=x+5;
}catch(err)
{
  console.log("Error occurred", err.message);
}
output-
Error occurred x is not defined


//SYNC IN JS

synchronous js means tasks are performed one after another, each task waits for previous one to finish before executing

//executes line be line

asynchronous js, long-running tasks run in the background without blocking the main thread

ex-
console.log("start");

setTimeout(()=>{
  console.log("middle");
},2000);
//2000 is time in ms


console.log("end");

//output-

start
end
middle

//non blocking and improves performance 

//asynchronous features are - setTimeout(), setInterval(), Promises, fetch() async/await

//callback Hell- when multiple callbacks are nested inside each other, making the code hard to read,understand and maintain

//creates a pyramid-like structure, often called the "Pyramid of Doom"

//PROMISES- "eventual completion of task" , it is an object in Js
it is solution to callback hell

//creating a promise-

let promise=new Promise((resolve,reject)=>{
  let success=true;

  if(success)
  {
    resolve("Operation successful");
  }
  else
  {
    reject("Operation failed");
  }
});

//consuming a Promise-

promise
  .then((result) => {
    console.log(result); // fulfilled
  })
  .catch((error) => {
    console.log(error); // rejected
  });


//promises are used when a task takes time to complete, and the result is not available immediately, for example, reading files, database operations, timers (setTimeout)

//IF SOMETHING DEPENDS ON FUTURE DATA, USE A PROMISE

//creating a promise when we have an async task

function getUserData() {
  return new Promise((resolve, reject) => {
    // async task
    setTimeout(() => {
      resolve("User data loaded");
    }, 2000);
  });
}

MEANS I PROMISE I'LL GIVE YOU DATA LATER

//using(consuming a promise)

getUserData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));



//ASYNC-AWAIT-

async is used before a function and always return a promise

async function greet() {
  return "Hello!";
}

greet().then((msg) => console.log(msg)); // Output: Hello!

//even if you return a normal value, async wraps it in a promise

await is used inside an async function,
pauses the execution of that function until the promise resolves


async function getData() {
  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded!"), 2000);
  });

  let result = await promise; // wait for promise
  console.log(result);
}

getData(); 

//output after 2 seconds

Data loaded!

using async/await makes asynchronous code look synchronous,avoid callback hell and easy error handling with try-catch


