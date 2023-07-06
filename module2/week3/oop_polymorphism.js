class Bird{
    useWings() {
        console.log('flying')
    }
}

class Eagle extends Bird{
    useWings() {
        super.useWings()
        console.log('Barely flapping')
    }
}

class Penguin extends Bird{
    useWings(){
        console.log('Diving')
    }
}

class X_penguin extends Penguin{
    useWings(){
        super.useWings()
            console.log('rocket boost')
    }
}


let baldEagle = new Eagle();
let kingPenguin = new Penguin();
baldEagle.useWings();
kingPenguin.useWings();

let test = new X_penguin()
test.useWings()