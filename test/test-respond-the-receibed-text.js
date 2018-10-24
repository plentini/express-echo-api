
const app = require('../app');
const assert = require('chai').assert
const request = require('supertest'); 

const expectedText =  {texto : "Hola"};
describe('POST /', function() {
  it('Respond with the receibed text', function() {
    request(app)
      .post('/',expectedText)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((err,response) => {
      	if (err) return err;
      	assert(response.body, expectedText);
      })
  });
});