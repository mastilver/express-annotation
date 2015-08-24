var annotationRouter = require('annotation-router');
var toAbsolutePath = require('to-absolute-path');


module.exports = function(app, paths, callback){

    paths = toAbsolutePath(paths, 1);

    annotationRouter(paths, function(err, route){

        if(err) return callback(err);

        app[route.method.toLowerCase()](route.url, route.action);
    },
    function(err){
        callback(err);
    });
};
