let shoes1 = {
    price: 100,
    stateTax: 1.2,
    totalPrice: function() {
        let cost = this.price * this.stateTax;
        console.log(cost);
    }
}
shoes1.totalPrice();

// This is the same program as fp1.js just using OOPs(Object Oriented Programming) instead of FP(Functional Programming).