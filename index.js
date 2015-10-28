var annotationRouter = require('annotation-router');
var toAbsolutePath = require('to-absolute-path');


module.exports = function(app, paths, callback){

    paths = toAbsolutePath(paths, 1);

    var registerRoute = registerApp(app);

    annotationRouter(paths, function(err, route){

        if(err) return callCallback(err);

        registerRoute(route);
    },
    function(err){
        callCallback(err);
    });

    function callCallback(err){
        if(callback != null){
            callback(err);
        }
    }
};

module.exports.sync = function(app, paths){

    paths = toAbsolutePath(paths, 1);

    var registerRoute = registerApp(app);

    annotationRouter
        .sync(paths)
        .forEach(registerRoute);
};

function registerApp(app){
    return function(route){
        app[route.method.toLowerCase()](route.url, route.action);
    }
}
