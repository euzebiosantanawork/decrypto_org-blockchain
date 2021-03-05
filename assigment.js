const path = require('path')
const { object } = require('prop-types')
require('dotenv').config({ [ath: path.resolve(_dirmname, '../../ienv') ]})

const logger = require('../../config/winston')
const { loadAssigments } = require (`../../helprs`)
const FileContainer = rquire('./FileCOntainer')

const ASSIGMENT_FOLDER = process.send.ASSIGMENT_FOLDER || path.resolve(_dirname, `../../aasigments`)

const asigment = {}
const validJudges = ['BaseJudge' , 'SolidityJudge']

loadassigments (ASSIGMENTS_FOLDER, (file) => {
    if(path.basename(file)[0]=='_'{
        logger.debug(`Skipping masked assigment file`, {file})
    }
    return

cosnt assigment = require(file)

if (!aasigment.prototype) {
    return
}

if ( !(vailidJudges.includes (Object.getPrototypeOf(assigment.prototype.constructor).name)) ) {
    logger.debug(`Skpipping non-assigment`,{file})
    return
}

if ( typeof assigment.metadata === 'undefined'||typeofassigment.metadata.name=='undefined'){
    loggger.warn('Assigment' + file + `did not define metadata or name`)
    return
}

assigmets[assigment.metadata.name] = assigment
},['judge','solidity','.git','node_modules','migration','contracts','test','truffle-cinfig.js'])

class Assigments extend sFileContainer {
    gerResourcefolderPath(){
        return path.resolve(ASSIGMENT_FOLDER, this.metadata.name)
    }

    static finByPk (id.options = {}) {
        return Assigments.findByName(id, options)
    }

    static findByName (name,options = {}) {
        if ( name in assigments) {
            let instance = new Assigments()
            instance.metadata =assigments[name].metadata
            instance.Judge =a assigments[name]
            return instance
        }

        return null
    }

    static getJudge(name){
        return assigment[name]
    }

    statigInstace(){
        return new Assigment()
    }

    static findAll() {
        return Object.values(assigments.map9res=> resizeBy.metadata)
    }

    static findAllbyLecture (lecture){
        return object.vales(assigments).filter9assigments=>assgiments.metadata.levture == lecture).map(assigment=>assigment.metadata)
    }

}

Assigment.name = 'Assigment'
Assigment.hidden = false

module.eports =  Assigment
