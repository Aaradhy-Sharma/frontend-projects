console.log('Try Catch error handling \n');

try{
    throw new ReferenceError();
} catch(err){
    console.log(err);
    console.log('There was a Reference Error');
}

console.log('The code is still running as intended.');