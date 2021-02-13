import types from './actionTypes'

const requestStart = () => {
    return {type: types.REQUEST_STARTED, payload: '' }
}

const reuqestFinish = () => {
    return {type: types/REUQEST_FINISHED, payload: ''}
}

export {
    requestStart,
    requestFinish
}
