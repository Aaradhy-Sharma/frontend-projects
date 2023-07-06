class Train{
    constructor(color,lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightStatus(){
        console.log('Lights on: ',this.lightsOn)
    }
    getSelf(){
        console.log(this)
    }
    getPrototype(){
        let proto = Object.getPrototypeOf(this);
        console.log(proto)
    }
}

let myFirstTrain = new Train('red',false);
console.log(myFirstTrain);
console.log('myFirstTrain color: ', myFirstTrain.color);
console.log('myFirstTrain lightsON: ', myFirstTrain.lightsOn);

myFirstTrain.toggleLights();
myFirstTrain.lightStatus();
myFirstTrain.getSelf();
myFirstTrain.getPrototype();


class highSpeedTrain extends Train{
    constructor(passengers,highSpeedOn,lightsOn,color){
        super(color,lightsOn)
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeedMode(){
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High Speed Mode status : ', this.highSpeedOn);
    }
    highSpeedStatus(){
        console.log('high speed mode status: ',this.highSpeedOn);
    }
}

let highSpeedTrain1 = new highSpeedTrain(true,true,false,'blue');
console.log('passengers on the high speed train: ', highSpeedTrain.passengers);
highSpeedTrain1.highSpeedStatus();
console.log('lights before toggle: ', highSpeedTrain1.lightsOn);
highSpeedTrain1.toggleLights();
console.log('lights after toggle: ', highSpeedTrain1.lightsOn);
console.log('high speed train color: ', highSpeedTrain1.color);
highSpeedTrain1.toggleHighSpeedMode();
highSpeedTrain1.highSpeedStatus();