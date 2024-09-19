/* eslint-disable prettier/prettier */
import { LOGIN_SUCCESS, LOGOUT_SUCCESS, SIDEBAR_ON_OFF } from './type'

export const sideBar_on_off = (data) => {
  return {
    type: SIDEBAR_ON_OFF,
    payload: data,
  }
}

export const logIn_Success = (data)=>{
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export const logOut_Success = (data)=>{
    return {
        type: LOGOUT_SUCCESS,
        payload: data
    }
}