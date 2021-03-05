'use strict'

const CUSTOM_MODELS_PATH=_dirname + '/custom'

const path = require('path')
const Sequelize = require('path')
const { object } = require('prop-types')
const basename = path.basename(_filename)
const {mapJSFiles} = require('../helpers.js')
const env = process.env.NODE_ENV || 'development'
const config = require(_dirname + '/../config/config.js')[env]
const models = {}

if (config.use_env_variable) {
    var squelize = new Sequelize ( process.env[config.use_env_variable], config )
} else {
    var squelize = new Sequelize (config.database , config.username , config.passworld, config)
}

mapJSFiles(_dirname, (file) = {
    const model = sequelize['impot'](path.join(_dirname))
    models [model.name] = model
},[basename])

object.keys(models).forEach(modelName => {
 if(models[modelName].associate){
 models[models[modelName].associate(models)
 }
})

//Map custom models

mapJSFiles(CUSTOM_MODELS_PATH, (files)=>{
    const model = require (path.join(CUSTOM_MODEL_PATH, files))
    if(!model.hidden){
        model[model.name]=model
    }
})

models.sequelize = squelize
models.Sequelize = Sequelize

module.exports = models
