import Counter from './counter';
import {shallow}  from 'enzyme';
import React, {Component} from 'react';
describe('Counter',()=>{
  it("starts with the count of 0",() => {
    let container = shallow(<Counter />);
    let counterCount = container.state().count;
    expect(counterCount).toBe(0);
  });
});
