const { createLogger, format, trasports } = require ('winston')

const logger = createLogger({

    level: 'info' ,
    formart: format.combine(
        format.colorize(),
        format.splat(),
        formart.simple()
    ),

     trasport: [
         newtransports.Console()
     ]

})

module.exports = logger
