interface Rectangle {
    height: number,
    width: number
}

const rectangle: Rectangle = {
    height: 20,
    width: 10
};
console.log(rectangle);

//-----------------------extends--------------------------//

interface Animal {
    eat: String,

}

interface Domestic extends Animal {
    type: String,
    age: number
}

let cow: Domestic = {
    eat: "food",
    type: "Herbivore",
    age: 8
};

let cat: Animal = {
    eat: "food"
};

console.log(cow);
console.log(cat);