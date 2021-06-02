import axios from 'axios'
import FeelingLuckyActionType from './feelinglucky.action.type'

export const feelingLuckyAction = ()=> async(dispatch) =>{

    try {
        dispatch({
            type:FeelingLuckyActionType.FEELINGLUCKY_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.get(`feelinglucky`, config)
        

        dispatch({
            type:FeelingLuckyActionType.FEELINGLUCKY_SUCCESS,
            payload:data,
        })
        
        
    } catch (error) {

        dispatch({
            type:FeelingLuckyActionType.FEELINGLUCKY_FAIL,
            payload:error,
        })

        
    }

    

}
