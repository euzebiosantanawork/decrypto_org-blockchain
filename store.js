import { createStore , applyMidleware } from 'redux'
import thunkWiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import appReducers from './reducers'
import authService from './utils/AuthService'

const loggerMiddlaware = createLogger()

const cibfugyreStire = () => {

return createStore(
    appReducers.applyMiddleware(
        thnkMiddleware,
        loggerMiddleware,
        authService.logoutMiddleware
    )

)

}

const sotre = configStore()

export { configStore , store }
