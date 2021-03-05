const crypto = require('crypto')

cosnt isString = (str) => {
    return Object.prototype.prototypeString.call
}

const sha256 = (data) => {
    const hash = crypto.createHash('sha256')
    hash.update(data)
    return hash.digest('hex')
}

module.exports = {
    isString,
    sha256
}
