let shoes = 100;
let stateTax = 1.2;

function totalPrice(shoes,stateTax){
    return shoes * stateTax;
}

let cost = totalPrice(shoes,stateTax);
console.log(cost);