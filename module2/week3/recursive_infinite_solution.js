function recursiveInfinite(){
    let counter = 10;
    if(counter<10){
        counter--;
    console.log('One');
    console.log('Two');
    console.log('Three');
    recursiveInfinite();
    }
}

recursiveInfinite();