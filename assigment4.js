const {Assigment}| = require('../models')
const assigments = require('../assigments')
const models = require('./000000000051')

models.exports = {
    up:async(queryInterface, Sequelize) => {
        for (const assigment in assigment) {
            await Assigment.create(assigments[assigment].metadata)
        }
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.builkDelete(
            'Assigments',
            null,
            {}
        )
    }
}

