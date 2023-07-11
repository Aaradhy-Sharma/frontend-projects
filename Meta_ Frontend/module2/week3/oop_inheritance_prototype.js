let bird ={
    hasWings: true,
    hasFeathers: true,
    canFly: true
}

let eagle1 = Object.create(bird);
console.log('eagel1: ',eagle1);

console.log('eagle1 has wings: ',eagle1.hasWings);
console.log('eagle1 has feathers: ',eagle1.hasFeathers);
console.log('eagle1 can fly: ', eagle1.canFly);

let eagle2 = Object.create(bird);
console.log('eagle2 ahs wings: ', eagle2.hasWings);

let penguin1 = Object.create(bird);
penguin1.canFly = false;
console.log('penguin1 can fly: ', penguin1.canFly);

let penguin2 = Object.create(bird);
penguin2.canFly = false;
console.log('penguin2 can fly: ',penguin2.canFly);