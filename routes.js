const express = require('express')

const createControllerRoutes = ({ controller ,path , param , middlewares }) => {
    
    const route = express.routes()
        router.get('/' , middlewares, ( req , res , next ) => controller.list(req, res).cath(next))
        router.get('/${path}' , midlawares ,( req , res , next ) => controller.read( req , res ,req.params[param] ).catch(next))

        return router
    
}

const createSimpleRouter = ({ controllerName , midlewares = [] , path = `:id(\\d+)` , param = `id` }) => {
    conts Controller = require('../controllers/${controllerName}')
    const controller = new Controller()
    return { routr: createControllerRoutes({ controller , middlewares , path , param }), controller }
}

const createDownloadbleRoute = ( router , controller ) => {

    router.get(
        '/:name?materil/:hash([0-9A-Fa-f]{64})',
        ( req , res , next) => { controller.dowload( req , res , req.params.name, req.params.hash ).catch(next) }
    )

    return router

}

module.exports = {
    createSimpleRouter,
    createControllerRoutes,
    creareDowloadableRoute
}
