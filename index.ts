let n: string = "Subhajeet";
console.log(typeof (n));

let firstName: string = "Dylan";
//firstName = 33; // throws error Type 'number' is not assignable to type 'string'.

//------------------------array---------------------------------//

let num: number[] = [1, 2, 3];
num.push(4);
//num.push("5") // error
console.log(num);

//------------------------tuple---------------------------------//

let newTuple: [string, any];
newTuple = ["name", "subhajeet"];
newTuple.push("age", 25);
newTuple[1] = ["age", 25];
console.log(newTuple);

//------------------------object---------------------------------//

let car: { type: string, mileage: number } = {
    type: "Toyota",
    mileage: 20
};
console.log(car);

let dog: { breed: string, age?: number } = { //?means optional
    breed: "Doberman"  
};
dog.age=25;
console.log(dog);

//------------------------functions---------------------------------//

function multiply(a: number, b: number) : string { // this function will return string
    return `answer= ${a} * ${b}`;
}

console.log(multiply(2,4));
