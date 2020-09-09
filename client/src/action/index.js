import * as types from '../constants/actionTypes'
import axios from 'axios'

const SERVER_URL = `http://localhost:3005/`

function loadDataSuccess(data) {
    return {
        type: types.LOAD_DATA_SUCCESS,
        data: data
    }
}

export function loadData() {
    return dispatch => {
        axios.get(SERVER_URL)
            .then(res => {
                dispatch(loadDataSuccess(res.data))
            })

    }
}

export function saveData(data) {
    return dispatch => {
        axios.post(SERVER_URL, data)
            .then((err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(res.body.data);
                }
            })
    }
}
