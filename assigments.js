import {buildActions} from '.../util/actions'
import { type } from 'os'

import types from './actionTypes'

const actions = buildActions ({

    getAssigments: types.GET_ASSIGMENTS,
    getAssigmentsSucess: type.GET_ASSIGMENTS_SUCCESS,
    getSigleAssingment: types.GET_SINGLE_ASSINGMENT,
    getSigleASsigmentSucess: types.GET_SIGLE_ASSIGMENT_SUCESS,
    postSolution: types.SUBIMIT_SOLUTION,
    postSolutionSuccess: types.SUBIMIT_SOLUTION_SUCESS,
    fwtchAssigments: ['getAssigments', 'getAssingmentSuccess' , 'assigment'],
    fetchAssigments: ['getSigleAssigment' , 'getSilgeAssigmentSuccess' , 'assigments/:id'],
})

export default actions
