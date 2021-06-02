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


export const signleMovieReducer = (state=INITITAL_STATE,action) => {
    switch(action.type){
        case ContentActionType.SINGLE_MOVIE_REQUEST:
            return {movieLoading:true}
         
        case ContentActionType.SINGLE_MOVIE_SUCCESS:
            return{movieLoading:false, singleMovieDetail: action.payload }

        case ContentActionType.SINGLE_MOVIE_FAIL:
            return{movieLoading:false, error:action.payload}

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




export const singleSeriesReducer = (state=INITITAL_STATE,action) => {
    switch(action.type){
        case ContentActionType.SINGLE_SERIES_REQUEST:
            return {seriesLoading:true}
         
        case ContentActionType.SINGLE_SERIES_SUCCESS:
            return{seriesLoading:false, singleSeriesDetail: action.payload }

        case ContentActionType.SINGLE_SERIES_FAIL:
            return{seriesLoading:false, error:action.payload}

        default:
            return state
    }

}