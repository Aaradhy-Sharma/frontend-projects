try{
    console.log(a+b);
}
catch(err){
    // console.log(err)
    console.log('There was an error.');
    console.log('The error was stored in the error log');
}

console.log('In this case the process does not stop even if there is an error. This error would be stored in error logs which can be corrected accordingly.')