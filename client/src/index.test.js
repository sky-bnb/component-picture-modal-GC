import React from 'react';
import App from './index.jsx';
import { shallow } from 'enzyme';

describe('index component', () => {
  it('see if enzyme works on React', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('#test').text();
    expect(text).toEqual('This is Modal');
  })
})