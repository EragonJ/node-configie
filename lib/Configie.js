var fs = require('fs');

// how to use
// var config = require('Configie')('auth');

function Configie() {

}

Configie.prototype = {
    _getEnv : function() {
        return (process.env === 'production') ? 'production' : 'development';
    },
    _getBasePath : function() {
        return process.cwd() + '/config/';
    },
    _getConfig : function( fileName ) {
        return JSON.parse(fs.readFileSync(  this._getBasePath() + fileName + '.' + this._getEnv() + '.json'));
    },
    get : function( fileName ) {
        if ( fileName ) {
            return this._getConfig( fileName );
        }
        else {
            throw new Error('your filename is empty');
        }
    }
}

// singleton
global.Configie = global.Configie ? global.Configie : new Configie();

module.exports = global.Configie;
