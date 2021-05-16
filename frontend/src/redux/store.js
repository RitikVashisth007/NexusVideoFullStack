import { createStore, applyMiddleware , combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {userLoginReducer} from './user/user.Reducer'
import {movieReducer,seriesReducer} from './content/content.reducer'
import {userRegisterReducer} from './user/user.Reducer'

 
const middleware = [thunk]

const rootReducer = combineReducers({
    login:userLoginReducer,
    register:userRegisterReducer,
    movieDetails:movieReducer,
    seriesDetails:seriesReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null



const initialState = {
    
    login : {userInfo: userInfoFromStorage},
    movieDetails:''
}



const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store 