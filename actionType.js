import { buildAvtionstypes } from '../utils/actions'

const types = [
    'GET_LECTURES',
    'GET_LECTURES_SUCESS',
    'GET_SINGLE_LECTURE',
    'GET_SINGLE_LECTURE_SUCCESS',
    'GET_LECTURES_GROUPS',
    'GET_LECTURES_GROUPS_SUCESS',
    'GET_LECTURE_GROUP',
    'GET_LECTURE_GROUP_SUCESS',
    'GET_ASSINGNMENTS',
    'GET_ASSINGMENTS_SUCCESS',
    'GET_SINGLE_ASSINGMENT',
    'GET_SINGLE_ASSINGMENT_SUCCESS',
    'SUBIMIT_SOLUTION',
    'SUBIMIT_SOLUTION_SUCESS',
    'OPEN-TOAST',
    'CLOSE_TOAST',
    'GET_CURRENT_USER_SUCESS',
    'USER_LOGGERD_IN',
    'USER_LOGGERD_OUT',
    'LOGIN_REQUEST',
    'LOGIN_SUCCESS',
    'LOGIN_FAILURE',
    'LOGIN_REQUEST',
    'LOGIN_SUCCESS',
    'UNATHORIZED_ACTION',
    'REQUEST_STARTED',
    'REQUEST_FINISHED',
 
]

     const objtTypes = buildActionTypes(types)

     export default objTypes  
