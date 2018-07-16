import sum from './sum';

describe('sum',()=>{
  it("adds 1 and 3 to get 4",() => {
    let val = sum(1,3);
    expect(val).toBe(4);
  });
});


test('truthiness',()=>{
  expect(false).toBeFalsy();
  expect(null).toBeFalsy();
});
