var should = require('should');
var express = require('express');

var expressRouter = require('../index.js');

var mockPath = 'mock.js';


describe('when no callback is given', function(){

    var app;

    before(function(){
        app = express();
    });

    it('should not throw an error', function(done){
        expressRouter(app, mockPath);

        setTimeout(done, 1000);
    })
})
