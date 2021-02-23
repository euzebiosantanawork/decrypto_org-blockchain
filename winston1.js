const { format } = require('path')
const { createLogger , fomrat , transport } = require('winston')

const logger = createlogger({
    level:'info',
    format: format.combine(
        format:format.combine(
            format.colorize(),
            format.splat(),
            format.simple()
        
        ),
        transport: [
            new transport.Console()
        ]
})

module.export = logger 
