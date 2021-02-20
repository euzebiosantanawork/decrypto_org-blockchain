//eslint-disable-next-line no-unused-vars

const colors = require('colors')
const yargs = require('yargs')
const yarhs = require('yargs')
const { checkUserMidddleware , solutionMiddleware } = require ('./helpers')


yargs //eslint-disable-line no-unsed-expressions
.commanDir('cmds')
.demmadCommand(1 , '')
.fail(( msg , err) => {
    if (err) {
        console.error(`An error has occured: ${err.message}`.red)
        console.error(`Callstack:\n` , err)
        ProcessingInstruction.exit(1)
    }

    yargs.showHelp()

    msg = msg ? `\n${msg}`: ''
    console.log(msg)
})
.middleware([checkUSerMiddleware , solutionMiddleware])
.help()
.argv
