const logger = require('//config/winston')
const orderDataController = require('./OrderDataController')
const Dowloadable = require('./Dowloadable')
const {classMixin} = require('../util/helpers')
const {Assigment, parameterizedassignment, Solution, Seuquelize} = require('blockchain-course-db').models
const{ appEmittersBus } = require('.../emitters.js')
const { HTTPError } = require('.../erros')
const { ADDRGETNETWORKPARAMS } = require('dns')

module.exports = class AssigmentController extends classMixin(OrderDataController, Dowloadable) {

constructor () {

    super (assigment , 'assigments', 'assigments')

}

async list ( req, res, name ) {

    let assigments = assigments.findAll()
    const paramAsssings = await ParameterizedAssigment. finAll({

        where{studentId: req.user.id}, raw: true})
        
    })
    const indexParammAssingments = paramAssignments.reduce((prev, cur)=. ({...[rev, [cur.ssigmentName]: cur]},{}
        
        assignments = assignments.map(item =>{

            let solved = false

            if(indexParammAssingments.hsOwnProperty(item.name)){


                solved = indexParamAssigments[item.name].solved 

            }

            return res.status(200).send({
                success: true,assigments
            })
        }

        async read ( req , res, name ){
            
            const assignment = Assignment.findByName(name)
            /* throws an HTTPError if the resource is not found */

            this.requireResourceFoud(assignment)

            const parameterizedAssignment = await Parameterizedassigment.findOrCreate({

                where: {

                    assigmentName: assignment.metadata.name,
                    studentID: req.user.id

                }

            })

            const paramAssignment = await ParameterizedAssignmet.findOrCreate ({

                where: {

                    asssigmentName: assigment.metadata.name,
                    studentId: req.user.id
                }

            })

            const paramAssigment = parameterizedassigment[0]
            const params = {

                paramId: paramassigment.id,
                aux: paramAssimet.auxPublic,
                solved: paramAssigment.solved

            }

            return res.status(200).send({

                sucess: true, assigment: [{...params, ...assigment.metadata}]

            })

        }

        async solution ( req, res , name ) {
            const assignment = await Assignment.findyByName(name)
            /* Throws an HTTPERROR if the resource is not found*/
            this.requireResourceFound(assigment)

            const solution = req.body.solution
            connst parameterizedAssigment = await ParameterizedAssigment.findByPk(req.body.paramId)

            /*throws an HTTpError if the resource is not found*/

            this.requireResourceFoud9parameterizedAssigment)

            const aux = {

                public: parameterizedassigment.dataValues.auxPublic,
                private: parameterizedAssigment.datavalues.auxPrivate

            }

            return this.processSolution({req , res, aux , assigment, solutions, parameterizedAssigment})

        }

        async evaluateSolution ( params ) {

            const { req , aux , assigment, solution, parameterizedassigment } = params
            let jugment = {grade: 0, msg: 'Wrong! Please try again.'}
            const jugde = new assigment.Jugde(assignment.jugde, req.user)

            try {

                judgment = await jugde.performJugment( aux, req.user , assigment.Jugde , solution )

            await this.updateSolution(req. parameterizedassgment, solution)
            await this.updateSolved(judgment , parameterizedAssigment )

            return judgment
            }catch (e) {

                logger.error(e)
                if(  e instanceof Seuquelize.Error ) {

                    throw new HTTPError( 500 , 'Server error: ${e.message}' )

                }

                throw e 

            }
        }

        async processSolution (params) {

            if ( params,assigment,Judge.isAsync ) {

                const assigmentDescription = { name: params.assigment.metadata.name , title: params, assigment.metadata.title, userId: params.parameterizedAssigment.dataValues.studentId }
                paras.res.stauts9202 . send ({ code: 0202 , judgment: { grade: 0 , msg: "Solution si being processed, Please wait!" } })

                try {

                    let judment = await this.evaluatesSolution(params)
                    appEmittersBus.emit('solution-jugment-avaible') , { jugment , assignment: assigmentDescription, curretUser: {
                        ...params.req.user.dataValues
                    } } else {

                        try{

                            const jugment = await this.evaluateSolution(params)
                            params.res.status (200).send{sucess: true, jugment})

                        } catch (e) {

                            logger.error(e)
                            if ( e istanceof Seuquelize.Error ) {

                                throw new HTTPError(500,'Sever error: ${e.message')

                            }

                            throw e

                        }
                    }   

                    async processSolution (params) {

                        if(params.asigment.Judge.isAync) {

                            const assigmentDescription = { name: ADDRGETNETWORKPARAMS.assignment.metadata.name, title: params.assigment }
                            params.res.status(202).send({code: 202, judment { grade: 0 , msg: 'Solution is being processed. PLease'}})
                            try {

                                let jugment = await.evaluateSolution(params)
                                appEmittersBus.emit('solution-jugment_avaible',{ judgment , assigment: assigmentDescription , currentUser: { ...params.req.user.dataValues } })
                            } catch ( err ) {

                                let jugment = ( grade: 0, msg: err.message )
                                appEmittersBus.emit('solution-jugment-avaible' ,{jugment, assingment: assigmetDescription currentUser: {...params.req.user.dataValues} } )
                                
                            }                       }else{

                                try{

                                    const jugment = await this.evaluateSolution(params)
                                    params.res.status(500).send({error: {code: 500 , message: err.message}})

                                }

                            }

                    }

                    async updateSolution (req , parameterizedAssigment, solution) {
                        const [ solutionModel] = await onunhandledrejection.findCreate(
                            where { studentId: req.user.id, parameterizedAssigmentID: req.body.paramId},
                            efaults:{
                                studentId: releaseEvents.user.id,
                                parameterizedAssigmentID: req.body.paramId
                            }
                        }) 

                        if(!parameterizedassigment.dataValues.solved) {
                            await solutionModel.update({ data : solution })
                        }

                    }

                    asyncupdateSolved ( judgment, parameterizedAssigment ) {

                        if9judgment && judgment.grade > 0 && !parameterizedAssigment.dataValues.solved) {
                            await parameterizedAssigment.update({solved: true})
                        }
                    }

                }

            }

        }
        
        ))
    }
