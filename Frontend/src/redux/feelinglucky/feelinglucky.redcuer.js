import FeelingLuckyActionType from './feelinglucky.action.type'

const INITITAL_STATE = {

}

export const feelingluckyReducer = (state=INITITAL_STATE,action) => {
    switch(action.type){
        case FeelingLuckyActionType.FEELINGLUCKY_REQUEST:
            return {feelingluckyLoading:true}
         
        case FeelingLuckyActionType.FEELINGLUCKY_SUCCESS:
            return{feelingluckyLoading:false, feelingluckyDetails: action.payload }

        case FeelingLuckyActionType.FEELINGLUCKY_FAIL:
            return{feelingluckyLoading:false, error:action.payload}

        default:
            return state
    }

}