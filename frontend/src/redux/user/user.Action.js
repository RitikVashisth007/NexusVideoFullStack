import UserActionType from './user.action.type'
import axios from 'axios';



export const login = (email,password) => async(dispatch) => {

    try {
        
        dispatch({
            type:UserActionType.USER_LOGIN_REQUEST,
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.post('api/user' , 
            { 'username': email, 'password':password },
            config
        
        )

        dispatch({
            type:UserActionType.USER_LOGIN_SUCCESS,
            payload:data,
        })
        
        localStorage.setItem('userInfo',JSON.stringify(data))

    } catch (error) {
        dispatch({
            type:UserActionType.USER_LOGIN_FAIL,
            payload:error.ressponse&&error.ressponse.data.detail
            ?error.ressponse.data.detail
            : error.message,
        })
        
    }

}

export const logout = (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({
        type:UserActionType.USER_LOGOUT
    })
}



export const register = (email,password,name) => async(dispatch) => {

    try {
        
        dispatch({
            type:UserActionType.USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.post('api/registerUser' , 
            { 'name':name, 'email': email, 'password':password,  },
            config  
        
        )

        dispatch({
            type:UserActionType.USER_REGISTER_SUCCESS,
            payload:data,
        })
        dispatch({
            type:UserActionType.USER_LOGIN_SUCCESS,
            payload:data,
        })
        console.log('this is inn try')
        
        localStorage.setItem('userInfo',JSON.stringify(data))

    } catch (error) {
        // dispatch({
        //     type:UserActionType.USER_REGSITER_FAIL,
        //     payload:error.ressponse&&error.ressponse.data.detail
        //     ?error.ressponse.data.detail
        //     : error.message,
        // })
        console.log('hello')
        console.log(UserActionType.USER_REGISTER_REQUEST)
        
    }

}