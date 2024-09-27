const data = [{id:1, name: 'abul', address: "faridpur"}]

const products ={
    count: 5000,
    data: [
        {id: 1, name: "dell Loptap", price: 50000},
        {id: 2, name: "Lenovo Loptap", price: 70000}
    ]
}

const user = {
    id: 5001,
    name:  "SHowrov Ghosh",
    address: {
        street: {
            first: "54/1 uttor side",
            second: "Roshown khan sorok",
            third: 'no dorai'
        }
    }
}

const user2 = {
    id: 5002,
    name: "Dipu Ghosh",
    address: {
        city: "Fazilpur",
        country: "Bangladesh",
    }
}

console.log(user2.address.street?.second);
