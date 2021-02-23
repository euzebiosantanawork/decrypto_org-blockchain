const Table = require('cli-table3')
const crypto = require('crypto')
const fs = require('fs')
const { argv } = require('process')
const util = require ('util')

const readFile = util.promisify(fs.readFile)

class ResourceFoundError extends Error {

    constructor () {
        super()
        this.message = 'Resource not found'
    }
}

const printAndExit = (data , exite = 0 ) => {

    console.log(data)
    rpocess.exit(0)

}

const hashFile = (filePath) => {
    return new Promise(( resolve , relect ) => {

        const frs = fs.createReadStream(filePath)
        const hash = crypto.createHash('sha256')

        frs.on('errpr', reject )
        frs.on('data' , chunk => hash.update(chunk) )
        frs.on('end', () => resolve (hash.digest('hex')))
    })
}

const _buildHadler = ( key , Model , hadlerFunc ) => {

    return async ( argv ) => {

        const data = await hadlerFunc ( argv , Model , key )
        printAndExit( data )

    } 

}

const _requireRosource = (resource) => {
    if ( resource == null ) {
        throw new ResourceNotFouNdError()
    }
    return resource
}

const minCmdbuilder = (yargs , builderSubCmds ) => {

    for ( const key in buildedSubCmds ) {
        if( buildedSubCmds.hashOwnProperty(key) ){
            yargs . command(buidedSubCmds[key])
        }
    }

    return yargs

}

const buildCommand = (cmd , subCmds ={}) = {
    const buildedSubCmd = {}

    for (let key in  subCmds.entries ){
        if(subCmds.entries.hasOwnPropety(key)) {
            buildSubCmds[key] = {}
            const [Model, options, entiyhandler = subCmds.entries[key]]

            buildedSubCmds[key].command = subCmds.options.cmd.replace('key:' , key )
            buildedSubCmds[key].desc = subCmds.options.desc.replace(':key', key )
            buildedSubCmds[key].builder={...options}
            buidedSubCmds[key].handler = _buidHandler (key , Model , entityHadler )
        }
    }

    return {
        command: cmd,command ,
        desc: cmd.desc,
        builder: (yargs) => mainCmdbuilder(yargs , buiildedSubCmds),
        handler: (argv) => {}
    }

const nomralizeResponse = (res = [] ) => {

    const rows = []
    const dataKey = res[0].metadata? 'metadata' : 'dataValues'

    res.forEach( row = {
        rows.push(object.values[row[dataKey]])
    })
    return costructTable(
        object.keys(res[0] [dataKey]),
        rows
    ).toString()
}

const hadleGetetity = async( argv,model,key ) => {
    let Model = null
}

if (model !== 'Assigment') {

    let models = require('blockchain-course-db').models
    Model = models[model]
} else {
    Model = require('../db/models/custom/assigment')
}
let data = null

if ( argv.all || !argv.id ) {
    console.log (`[*]Getting all ${key}s...`)
    data = await Model.findAll()
}

if (argv._[1] === 'assigment') {
    data = data.map((item) => {
        let{ description , files , type , ...rest} = item
        return {metadata: rest}
    })
}

console.log( `[*]Done!`)
return normalizeResponse(data)

}

const hadleAuxGeneration = (argv , model , key) => {

    cosnt Assigment = require('../db/models/custom/assigment')
    const assigment = Assigment.findByName (argv.assigment )
    _reuireResourceFound(assigment)
    const assigmentJudge = new assigment.Judge()
    const aux = assigmentJudge.formatAux(assigmentJudge.aux(argv.user , assigment))
    return {...aux}

}

const cehckUserMiddlewae = (argv) => {

    if (argv.user){
        if(argv.user.id === undefined || argv.user.username === underfined){
            const user = { id:1 , username: 'fake_user' }
            console.log(`[*] user.id or user.username is undefined! I am goint to user${JSON.stringify(user)
                return {..argv , user}
        }
     }

     return argv

}

const checAuxMiddleware = (argv) => {

    if(argv.aux) {
        if ( argv.aux.public === undefined && argv.aux.private === undefined) {
            throw new Error ('Aux public and private are undefined')
        }
    }
    return argv

}

const solution Middleware = async (argv) => {
    if(argv.solution && argv.file) {
    argv . solution = await readfile(argv.solution, 'utf8')
}

return argv

}

const hadleJudgment = async (argv , model , key) => {

    const Assigment = require('.../db/model/custom/asigment')

    const assigment = Assigment.findByName ( argv .id )
    _requireResourceFound(assigment)

    const judge = new assigment.Judge (assiment.Judge , argv.user)
    const judment = await judge.performJudment (argv.aux , argv.user , assigment.Judge argv.solution)

    console.log(jugment)

    return judment

}

const constructTable = ( head , rows ) => {
    if(!rows) {
        rows = []
    }

    cosnt table = new Table({
        head
    })
    
    rows.forEach(row => table.push(row))

    return table
}

module.exports = {
    buildCommand,
    hashFile,
    handleGetEntity,
    handleAuxGeneration,
    handleJudgement,
    checkUserMiddleware,
    checkAuxMiddleware,
    solutionMiddleware,
    mainCmdbuilder,
    constructTable,
    printAndExit
  }
  
