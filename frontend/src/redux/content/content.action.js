import axios from 'axios'
import ContentActionType from './content.actionType'

export const movieAction = ()=> async(dispatch) =>{

    try {
        dispatch({
            type:ContentActionType.MOVIE_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.get('content/movie', config)

        dispatch({
            type:ContentActionType.MOVIE_SUCCESS,
            payload:data,
        })
        
        
    } catch (error) {

        dispatch({
            type:ContentActionType.MOVIE_FAIL,
            payload:error,
        })

        
    }

    

}



export const seriesAction = ()=> async(dispatch) =>{

    try {
        dispatch({
            type:ContentActionType.SERIES_REQUEST,
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.get('content/series', config)

        dispatch({
            type:ContentActionType.SERIES_SUCCESS,
            payload:data,
        })
        
        
    } catch (error) {

        dispatch({
            type:ContentActionType.SERIES_FAIL,
            payload:error,
        })

        
    }

    

}