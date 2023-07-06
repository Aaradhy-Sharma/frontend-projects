function icecream(flavor){
    this.flavor = flavor;
    this.meltIt = function (){
        console.log(`The ${this.flavor} ice cream has melted`);
    }
}

let vanillaIceCream = new icecream('vanilla');
let chocolateIceCream = new icecream('chocolate');
console.log(vanillaIceCream);
chocolateIceCream.meltIt();