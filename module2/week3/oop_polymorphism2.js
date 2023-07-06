class Animal{
    meal(){
        console.log('Source of nutrition.')
    }
}

class Herbivore extends Animal{
    meal(){
        super.meal()
        console.log('Primary Consumer')
    }
}

class Carnivore extends Animal{
    meal(){
        super.meal()
        console.log('Secondary/Tertiary Consumer')
    }
}

class Cow extends Herbivore{
    meal(){
        super.meal()
        console.log('Grass')
    }
}

class Lion extends Carnivore{
    meal(){
        super.meal()
        console.log('Cow')
    }
}

let lionKing = new Lion()
lionKing.meal()

let cowBrown = new Cow();
cowBrown.meal()