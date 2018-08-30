import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension/developmentOnly'

export default function configureStore() {
  let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
  return store
}