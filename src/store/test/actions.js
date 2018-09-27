import * as actionType from '../constants/index'

export function update(data) {
  return {
    type: actionType.STORE_UPDATE,
    data
  }
}

export function add(data) {
  return {
    type: actionType.STORE_ADD,
    data
  }
}

export function rm(data) {
  return {
    type: actionType.STORE_RM,
    data
  }
}