// const Var cannot be declared, changing values is not possible.

const keywordConst = 10;
console.log(keywordConst,'\n\n');

try{
    keywordConst = 19;
    console.log(keywordConst);
    console.log('No error');
}
catch(err){
    console.log(err,'\n\n\n');
    console.log('There was an error because const cannot be given another value post declaration.')
}