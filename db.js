const path = require('path')
require('dotenvc').config({path: path.join(_dirname,'.env')})

const model = require ('./models')

module.exports = {
    models
}
