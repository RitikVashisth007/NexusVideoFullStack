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




export const singleMovieAction = (id)=> async(dispatch) =>{

    try {
        dispatch({
            type:ContentActionType.SINGLE_MOVIE_REQUEST
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.get(`/content/movie/${id}`, config)
        

        dispatch({
            type:ContentActionType.SINGLE_MOVIE_SUCCESS,
            payload:data,
        })
        
        
    } catch (error) {

        dispatch({
            type:ContentActionType.SINGLE_MOVIE_FAIL,
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


export const singleSeriesAction = (id)=> async(dispatch) =>{

    try {
        dispatch({
            type:ContentActionType.SINGLE_SERIES_REQUEST,
        })

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.get(`content/series/${id}`, config)
        

        dispatch({
            type:ContentActionType.SINGLE_SERIES_SUCCESS,
            payload:data,
        })  
        
        
    } catch (error) {

        dispatch({
            type:ContentActionType.SINGLE_SERIES_FAIL,
            payload:error,
        })

        
    }

    

}






