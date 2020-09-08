import * as types from '../constants/actionTypes'
import axios from 'axios'

function loadDataSuccess(data) {
    return {
        type: types.LOAD_DATA_SUCCESS,
        data: data
    }
}

export function loadData() {
    return dispatch => {
        axios.get(`http://localhost:3005/`)
            .then(res => {
                dispatch(loadDataSuccess(res.data))
            })

    }
}
