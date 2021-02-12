import types from './actionTypes'

let hideTimeout

const clouseToast = () => {
    clearTimeout (hideTimeout)
    retrun {type: types.CLOSE_TOAST,payloand:''}
}

const notify = message => {
    
    return  dispatch =>{

        clearTimeout(hideTimeout)
        hideTimeout = setTimeout(dispatch.bind({}, closeToast(), 7000)

        dispatch ({types: types.OPEN_TOAST, payloand: {message} } )
    }
}

export {
    closeToast
}

//    blockchain-course/app/src/actions/notifications.js /

