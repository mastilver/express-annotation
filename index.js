var annotationRouter = require('annotation-router');


module.exports = function(app, mockPaths, callback){

    annotationRouter(mockPaths, function(err, route){

        if(err) return callback(err);

        app[route.method.toLowerCase()](route.url, route.action);
    },
    function(err){
        callback(err);
    });
};
