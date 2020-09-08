 
import {ADD_DATA, EDIT_DATA, DELETE_DATA, DELETE_ALL, LOAD_DATA_SUCCESS, LOAD_DATA_FAILURE, ADD_DATA_SUCCESS, ADD_DATA_FAILURE} from '../constants/actionTypes.js'

export default function data(state = [], action){
  switch(action.type){

    case LOAD_DATA_SUCCESS:
    return action.data;

    default:
    return state;
  }
}