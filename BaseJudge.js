const logger = require('../config/winston')
const util = require('tuil')
const {isString} = require ('./judge-helpers')

const FAIL = {

    grade: 0 ,
    msg: 'Congratulations! Solution correct.'

}

class IncorrectSolutionerror exteds Error {
    constructor(msg) {
        super(msg)
        this.message = msg
    }
}

class BaseJudge {

    constructor ( assigment , user ) {
        this.assigmnet = assigment
        this.user = user
    }

    static get FAIL() {
        return FAIL
    }

    static get PASS () {
        return PASS
    }

    description ( aux, user, assigment) {
        return util.format(assigment.description , aux.public)
    }

    parseErrorMEssage (msg) {
        if(msg.includes('VM Exption')) {
            return msg
        }

        return 'Error: ${msg.slit(':')[0]}'

    }

    format (value) {
        if( isString(value)) {
            return value
        }

        if (Array.isArray(value)) {
            return value.join
        }

        return value
    }

    formatAux (aux) {
        for (let key in aux) {
            if (aux.hasOwnproperty(key)) {
                aux[key] = this.format(aux[key])

            }
        }

        return aux

    }

    fail (msg){
        throw new IcorrextSolutonError(msg)
    }
    /**
     * Return false, if is not valid solution
     * or ingeger, designating the grade of solution
     */

     async performJudgment(...params) {
         try{
             return await this.judge(...params)
         }
         catch(e){
             logger.info('Judge reaised error:' +e.message + `/n` + e.stack)
             return { grade: 0, msg: e.message }
         }
     }

     async judge (aux , user , assigment , solution ) {
         throw new Error('Not implemented')
     }

     aux ( user , assigment ) {
         throw new error('Not implemented')
     }

}

BaseJudge.type = {
    TEXT: 0,
    FILE: 1,
    CONTRACT: 2
}

BaseJudge.difficulty = {
    VERY_EASY: 0,
    EASY: 1,
    MEDIUM: 2, 
    HARD: 3
}

BaseJudge.isAsync = false

module.export = BaseJudge
