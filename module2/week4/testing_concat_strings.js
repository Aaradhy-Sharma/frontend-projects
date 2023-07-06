import { expect } from 'chai';
function concatStr(strA,strB){
    return strA + strB;
}
let expect = require('expect');
console.log(concatStr(1,2));
expect(concatStr("abc","def")).toBe("abcdef");