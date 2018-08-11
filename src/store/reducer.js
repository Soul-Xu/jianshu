import { combineReducers } from 'rredux-immutable'
import { reducer as headerReducer } from '../common/header/store'

const reducer = combineReducers({
  header: headerReducer
})

export default reducer