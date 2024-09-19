/* eslint-disable prettier/prettier */
import { LOGIN_SUCCESS, SIDEBAR_ON_OFF } from './type'

const initialState = {
  sidebarShow: true,
  theme: 'light',
  isAuthenticated: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDEBAR_ON_OFF:
      return {
        ...state,
        sidebarShow: action.payload,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: action.payload,
      }
    default:
      return state
  }
}

export default reducer
