import Counter from './counter.jsx';
import {shallow}  from 'enzyme';

describe('Counter',()=>{
  it("starts with the count of 0",() => {
    let container = shallow(<Counter />);
    let counterCount = container.state().count;
    expect(counterCount).toBe(0);
  });
});
