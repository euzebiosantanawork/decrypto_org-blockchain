import {buidActions} from '../util/actions'

import types from './actionsTypes'

const actions = buildActions ({

getLecture: types.GET_LECTURES,
getLecturesSuccess: types.GET_LECTURES_SUCCESS,
getSigleLectures: types.GET_SINGLE_LECTUREM
getSigleLectureSuccess: types.GET_SIGLE_LECTURES_SUCCES,
fetchLectures: ['getLectures' , 'getLecturesSuccess', 'lecture']
fetchSigleLecutre: ['getSingleLecture','getSigleLectureSucess','lecture/:id']

})

export default actions 
