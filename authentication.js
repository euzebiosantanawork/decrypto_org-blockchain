const {inPath} = require('../utils/helpers')
const requireAtuh = ['^/api/user', '^/api/assigment']

const loginRequired = (req, res, next) => {
    if(!inPath ( requireAuth , req.path ) ) {
        return next()
    }
    if (res.user) {
        return next()
    } else  {
        res.sttus(403).json({error { status: 403, message: "Unauthorized action! Please login " }})
    }
}

module . exports = {
    loginRequired
}
