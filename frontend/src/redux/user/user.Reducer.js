import UserActionType from './user.action.type'



const INITIAL_STATE = {
    
  };


export const userLoginReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case UserActionType.USER_LOGIN_REQUEST:
            return {loading:true }

        case UserActionType.USER_LOGIN_SUCCESS:
            return {loading:false , userInfo:action.payload}
        
        case UserActionType.USER_LOGIN_FAIL:
            return { loading:false, error:action.payload}
        
        case UserActionType.USER_LOGOUT:
            return {}
 
        default:
            return state
    }
}


export const userRegisterReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type){
        case UserActionType.USER_REGSITER_REQUEST:
            return {loading:true }

        case UserActionType.USER_REGISTER_SUCCESS:
            return {loading:false , userInfo:action.payload}
        
        case UserActionType.USER_REGSITER_FAIL:
            return { loading:false, error:action.payload}
        
        

        default:
            return state
    }
}