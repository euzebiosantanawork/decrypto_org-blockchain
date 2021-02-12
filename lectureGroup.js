import {buildActions} from '.../utils/actions'
import { type } from 'os'

import types from './actionTypes'

const actions = buildActions ({

getLectureGroups: types.GET_LECTURE_GROUPS,
getLectureGroupSuccess: types.GET_LECTURE_GROUPS_SUCCESS,
getSigleLectureGroup: types.GET_LECTURE_GROUP,
getSigleLectureGroupSuccess: types.GET_LECTURE_GROUP_SUCCESS,
fetchLectureGroup: ['getLectureGroups','getLectureGroupSuccess',`lectureGroup/:id`]

})

export default
