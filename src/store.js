import { legacy_createStore as createStore } from 'redux'
import reducer from './redux/reducer'



const store = createStore(reducer)
export default store
