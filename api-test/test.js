const { assert, expect } = require('chai');
const request = require('supertest');


const baseUrl =  'https://pokeapi.co/api/v2';

describe('APi pokemon testing', () => {
    it('GET - Should return a specific berry-fruit', (done) => {
        request(baseUrl)
        .get('/berry?name=cheri/')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
            assert.equal(200, res.status);
            done();
          });
    });

    it('GET - Should return tha ability number of the element', (done) => {
        request(baseUrl)
        .get('/ability/')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
            assert.equal(293, res.body.count);
            console.log(res.body.count);
            done();
          });
    });


});