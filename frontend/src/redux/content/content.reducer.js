import ContentActionType from './content.actionType'

const INITITAL_STATE = {

}

export const movieReducer = (state=INITITAL_STATE,action) => {
    switch(action.type){
        case ContentActionType.MOVIE_REQUEST:
            return {loading:true}
         
        case ContentActionType.MOVIE_SUCCESS:
            return{loading:false, movieDetails: action.payload }

        case ContentActionType.MOVIE_FAIL:
            return{loading:false, error:action.payload}

        default:
            return state
    }

}



export const seriesReducer = (state=INITITAL_STATE,action) => {
    switch(action.type){
        case ContentActionType.SERIES_REQUEST:
            return {loading:true}
         
        case ContentActionType.SERIES_SUCCESS:
            return{loading:false, seriesDetails: action.payload }

        case ContentActionType.SERIES_FAIL:
            return{loading:false, error:action.payload}

        default:
            return state
    }

}