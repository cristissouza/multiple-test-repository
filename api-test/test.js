const { assert, expect } = require('chai');
const request = require('supertest');


const baseUrl =  'https://pokeapi.co/api/v2';

describe('GET API pokemon information', () => {
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
            done();
          });
    });
    it('GET - First soft berry', (done) => {
        request(baseUrl)
        .get('/berry-firmness/1')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
            assert.equal(200, res.status);
            done();
          });
    });

    it('GET - First soft berry name', (done) => {
        request(baseUrl)
        .get('/berry-firmness/1')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
            assert.equal('pecha', res.body.berries[0].name);
            done();
          });
    });

    it('GET - Berry type route  not found', (done) => {
        request(baseUrl)
        .get('/berry-firmness/6')
        .set('Content-Type', 'application/json')
        .end((err, res) => {
            assert.equal(404, res.status);
            done();
          });
    });

});