let shoes = {
    price: 50,
    color: 'blue',
    cushioning: true,
    Size: 10
}

for(key of Object.keys(shoes)){
    console.log(key,':',shoes[key]);
}