
Task 1: Print numbers 1 to 10 using a for loop

for(let i = 1; i <= 10; i++){
    console.log(i);
}


Task 2: Print even numbers from 2 to 20


for(let i = 2; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}


Task 3: Using while loop, print numbers 5 to 1

let i = 5;
while(i >= 1){
    console.log(i);
    i--;
}


Task 4: Use for…of loop to print all fruits


let fruits = ["apple", "banana", "mango"];

for(let fruit of fruits){
    console.log(fruit);
}


Task 5: Use for…in loop to print object values


let person = { name: "pratiksha", age: 25, city: "pune" };

for(let key in person){
    console.log(person[key]);
}


