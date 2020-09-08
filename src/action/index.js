import * as types from '../constants/actionTypes'

let data = [
    {
        id: 0, 
        title: 'Meeting With CEO',
        location: 'PASANGAN TIMUR, JAKARTA',
        date: '17 Agustus 2020',
        participants: ['Rio Jandi', 'Yudhistira', 'Rizky Syukur'],
        note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: null
    },
    {
        id: 1, 
        title: 'Meeting With Legal',
        location: 'RASUNA SAID, JAKARTA',
        date: '20 July 2020',
        participants: ['Rizky Syukur', 'Yudhistira', 'Reza '],
        note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: null
    },
    {
        id: 3, 
        title: 'Marketing Meeting',
        location: 'JALAN PANJANG, JAKARTA',
        date: '05 November 2020',
        participants: ['Rizky Syukur', 'Yudhistira', 'Reza '],
        note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        img: null
    }
]

function loadDataSuccess(data) {
    return {
        type: types.LOAD_DATA_SUCCESS,
        data: data
    }
}

export function loadData() {
    return dispatch => {
        dispatch(loadDataSuccess(data))
    }
}
