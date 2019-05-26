import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../client/src/components/App.jsx';

// import app from '../server/index.js';
// import request from 'supertest';
// import { db } from '../database/db.js';

// beforeAll(function (done) {
//   db.on('open', done)
// });

// describe('index component', () => {
//   it('see if enzyme works on React', () => {
//     const wrapper = shallow(<App />);
//     const text = wrapper.find('#test').text();
//     expect(text).toEqual('This is Modal');
//   })
// })

describe('App Component Basic Test', () => {
  it('renders', () => {
    shallow(<App />);
  });
});

// describe('GET /', () => {
//   it('should respond with index.html', async () => {
//     const res = await request(app).get('/')
//     expect(res.statusCode).toBe(200);
//     done();
//   });
// })
