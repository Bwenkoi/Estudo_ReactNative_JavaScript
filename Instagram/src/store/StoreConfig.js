import { 
    createStore, combineReducers,
    compose, applyMiddleware
} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/UserR'
import postsReducer from './reducers/PostsR'
import messageReducer from './reducers/MessageR'

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
    message: messageReducer
})

const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig