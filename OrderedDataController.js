const BaseController = require('./VaseController')

module.exports = class OrderedDataController extends BaseController [

    async list (req, res) {

        const options = {
            order: [
                ['position','ASC']
            ]

        }

        return super.list (req, res ,options)

    }

]
