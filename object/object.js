const student = {
    name: 'Showrov Ghosh',
    id: 138,
    address: "Faridpur",
    isSingle: true,
    friends: ['dipu','topu','apu','sk'],
    movies: [{name:"paglu", year: 2000, actor: 'Dev'},{name:"Tufan", year: 2011, actor:'Mithon Chockroborty'}],
    car:{
        brand: 'odi',
        price: 10000000,
        made: 2023,
        manufacturer:{
            name: 'Tata',
            CEO: 'Ratan Tata',
            country: 'India'
        }
    }
}

console.log(student.car);