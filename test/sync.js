var request = require('supertest');
var should = require('should');
var express = require('express');

var expressRouter = require('../index.js');

var mockPath = 'mock.js';

describe('register routes', function(){

    var app;

    before(function(){

        app = express();

        expressRouter.sync(app, mockPath);
    });

    it('should have register: GET /api/collection', function(done){
        request(app)
            .get('/api/collection')
            .expect(200)
            .expect('OK', done);
    });

    it('should have register: GET /api/entity/:id', function(done){
        request(app)
            .get('/api/entity/1')
            .expect(200)
            .expect('OK', done);
    });

    it('should have register: POST /api/test', function(done){
        request(app)
            .post('/api/test')
            .expect(201)
            .expect('Created', done);
    });

});
