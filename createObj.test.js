import createObj from './createObj.js';

describe('createObj',()=>{
  it("['a','b'],[1,2] => { a:1 , b:2 }",() => {
    let val = createObj(['a','b'],[1,2]);
    expect(val).toEqual({ a:1 , b:2 });
  });
});
