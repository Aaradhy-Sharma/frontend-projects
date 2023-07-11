let shoes2 = {
    price: 50,
    stateTax: 1.2,
    totalPrice: function() {
        let cost = this.price * this.stateTax;
        console.log(cost);
    }
}
shoes2.totalPrice();