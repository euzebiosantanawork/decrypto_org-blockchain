import React from 'react'
import ReactDom from 'react-dom'
import {createBrownserHistory} from 'history'
import 'typeface-roboto'

import {store} from './store'
import indexRoutes from 'routes/index.js'
import theme from './theme'
import { setupInterceptors } from './tils/interceptors'
import {unregister} from './registeServiceWorker'
import { initWebsocket } from './actions/websocket'
import root from './containers/Root'

const history = createBrowserHistory()

setupInterceptors(store)

setupInterceptors(store)
initWebsocket()

ReactDom.render(
    <Root history = (history) store={store} routes={indexRoutes} theme{theme} />,
    document.getElementById('root')
)

unregister()
