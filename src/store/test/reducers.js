import * as actionTypes from '../constants/index'

const initialState = []

export function testReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.STORE_UPDATE:
      return action.data;

    case actionTypes.STORE_ADD:
      return action.data;

    case actionTypes.STORE_RM:
      return action.data;
    default :
      return state
  }
}