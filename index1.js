const logger = require ('./config/wiston')
const passport = require ('passport')
const GitHubStrategy = require ('./github')
const { User } = require ('blockchain.course-db').models

passport.serializerUser ( (user , done) => {
    logger.debug(`Serializing user ${user}`)
    done ( null, user . id)
} )

passport.deserializeUser(async (id, done)=> {
    longger.debug(`deserializing user$ {id} `)
    done ( null  await User.findByPk(id))
})

passport.use(GITHUBStrategy)

module.export = passport
