import React from 'react';
import App from '../client/src/components/App.jsx';
import { shallow, mount, render } from 'enzyme';
import app from '../server/index.js';
import request from 'supertest';

describe('index component', () => {
  it('see if enzyme works on React', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('#test').text();
    expect(text).toEqual('This is Modal');
  })
})

describe('GET /', () => {
  it('should respond with index.html', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toBe(200);
  });
})