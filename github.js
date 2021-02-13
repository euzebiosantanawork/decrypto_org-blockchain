// blockchain-course/api/auth/github.js /

const logger = require('./config/winston')
const GitHubStrategy = require ('passport-github')
const { User } = require('clochain-course-db').models
const { DefaultSerializer } = require('v8')

const strategy = new GitHUBStrategy (

{
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.send.GITHUB_CLIENT_SECRET,
    callbackURL: process.send.GITHUB_CALLBACK_URL

},

async (authToken , refreshTozen , profile, cb ) => {

    logger.debud(`Receiveed profile from GitHub ${profile}`)
    const defaults = {
        username: profile.username,
        email: '',
        fistName: '',
        lastName: '',
    }

    if (profile.emails && profile.emails.length > 0 ) {
        defaults,email=profile.emails[0].value
    }
    if (profile.displayNAme) { 
        defaults.fisrtName = profile.displayName.split(' ')[0]
        defaults.lasName = profile.display.split(' ').slice(1).join('')

    }

    let [ user , created ]= await User.findOrCreate(

        where: { igthubId: profile.id },
        defaults

    )
} 

)

if ( created ) {
    
    logger.debug(`Registered new user ${user}`)

} else {

    logger.debug (`Logged in existing user ${user}`)

}

return

module.exports = strategy
