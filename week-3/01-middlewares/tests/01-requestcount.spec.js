const app = require("../01-requestcount");

const request = require('supertest');
const assert = require('assert');
describe('GET /user', function() {
  it('One request responds with 1', function(done) {
    request(app)
      .get('/requestCount')
      .then(response => {
        expect(response.body.requestCount).toBe(1);
        done();
      })
  });

<<<<<<< HEAD
  it('10 more requests log 12', function() {
=======
  it('10 more requests log 12', function(done) {
>>>>>>> 86bdc525b6a13a9b10f6a3babb28fcc538497275
          for (let i = 0; i<10; i++) {
            request(app)
                  .get('/user')
                  .then();
          }
          request(app)
              .get('/requestCount')
              .then(response => {
                expect(response.body.requestCount).toBe(12);
                done();
              })
      });
});

