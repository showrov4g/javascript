const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": "#daa520"
}

// console.log(colors["golden rod"]);

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
};
car.passenger= {
    capacity: 5
}

// console.log(car);
// console.log(car.passenger.capacity);
// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };
// console.log(student.physics);

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let property = Object.keys(student).length;

// console.log(property);

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

for (let key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        let value = myObject[key];
        console.log(`${key} ||| ${value} Type: ${typeof value}`);
    }
}

