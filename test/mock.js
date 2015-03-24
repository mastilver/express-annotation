
// @routePrefix('/api')
module.exports = {

    //@route('/collection')
    getAll: function(req, res){
        res.send('OK');
    },

    // @route('/entity/:id')
    getOne: function(req, res){
        res.send('OK');
    },

    // @httpPost()
    // @route('/test')
    test: function(req, res){
        res.sendStatus(201);
    },
};
