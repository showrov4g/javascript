class Vechicle{
    constructor(name, price){
        this.name = name,
        this.price = price
    }
    move(){
        console.log('gari chola an ara chola an');
    }
}

class Bus extends Vechicle{
    constructor(name, price, seat, ticketPrice){
        super(name, price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
}