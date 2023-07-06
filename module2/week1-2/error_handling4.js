console.log('Try Catch error handling 4!\n\n');

try{
    throw new SyntaxError();
}
catch(err) {
    console.log(err);
    console.log('There was a Syntax error that was thrown manually. \n\n')
}

console.log('Notice that the code is still being executed indicating that the Syntax error that was thrown manually was caught and stored in the error logs. Thus the error was handled successfully.');