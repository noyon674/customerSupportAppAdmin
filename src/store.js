import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducer from './redux/reducer'



const store = createStore(reducer, applyMiddleware(logger))
export default store
