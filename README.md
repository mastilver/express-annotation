# express-annotation [![Build Status](https://travis-ci.org/mastilver/express-annotation.svg?branch=master)](https://travis-ci.org/mastilver/express-annotation) [![Coverage Status](https://coveralls.io/repos/mastilver/express-annotation/badge.svg?branch=master)](https://coveralls.io/r/mastilver/express-annotation?branch=master)


> Bring annotation routing to [expressJs](https://github.com/strongloop/express)


## Install

`$ npm install --save express-annotation`

## Usage

given a file `/controllers/user.js`:

```

// @route('/users')
module.exports.getAll = function(req, res){

};

// @route('/users/:id')
module.exports.get = fucntion(req, res){
    console.log(req.params.id);
};

// @httpPut()
// @route('/users/:id')
module.exports.update = function(req, res){

};

```

you can register those routes by writing so:

```

var expressAnnotation = require('express-annotation');
var app = require('express')();

expressAnnotation(app, 'controllers/**/*.js', function(err){

    // routes have been added to the express instance

    app.listen(3030);
});

```

## API

### expressAnnotation(expressInstance, paths, callback)

#### expressInstance

*required*  
> express instance (value returned by: `express()`)

#### paths

*required*  
Type: `array`, `string`

#### callback(err)

Type: `Function`  
> will be called when all the routes have been added to the express instance


### [Annotations / Decorators API](https://github.com/mastilver/node-annotation-router#annotations-api)


## Licence

MIT © Thomas Sileghem
