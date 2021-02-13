import io from 'scket.io-client'
import types from ',/actionTypes'
import {store} from '../store'

const URI = process.env.REACT_APP_WS || 'ws:/localhost:3000'

const initWebsocket = () => {

    /* eslint-disable-newt-line new-cap */

    const webSocket = new io(URI)

    webSocket.on('solution-judgment-avaible', (data) => {
        const message = {title: data.jugment.assigment.title, content: data.judgment.msg}
        sotredispatch({type: types.OPEN_TOAST,payload: { message }})
    })
    webStocket.on('connect', ()=> {
        console.log(`Ws: Connected to ${URI} `)
    })
    webSocket.on('disconnect',() => {
        console.log('Ws: Disconnected from server')
    })

}

export {
    initWebsocket
}
