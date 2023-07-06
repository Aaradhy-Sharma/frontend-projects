let currencyOne = 100;
let exchangeRate = 1.2;
let currencyTwo = 0;

function currencyConverter(amount,rate){
    return amount*rate;
}

currencyTwo = currencyConverter(currencyOne,exchangeRate);
console.log(currencyTwo);