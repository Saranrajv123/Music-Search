import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('p').text();
    const count = 0;
    console.log("Hi");
    expect(text).toEqual('Count: '+count);
  });
});