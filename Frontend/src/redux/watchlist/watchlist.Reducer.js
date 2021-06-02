import WatchlistActionType from './watchlist.ActionType'

const INITIAL_STATE = [

]



// export const watchlistReducer = (state=INITIAL_STATE, action) =>{
//     switch(action.type){
//         case WatchlistActionType.WATCHLIST_REQUEST:
//             return {watchlistLoading:true}

//         case WatchlistActionType.WATCHLIST_SUSSCESS:
//             return {watchlistLoading:false, watchlistDetails:action.payload }


//         case WatchlistActionType.WATCHLIST_FAIL:
//             return {watchlistLoading:false , error:action.payload}


//         default:
//             return state

        

//     }

// }




export const movieWatchlistReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case WatchlistActionType.MOVIE_WATCHLIST_REQUEST:
            return {movieWatchlistLoading:true}

        case WatchlistActionType.MOVIE_WATCHLIST_SUSSCESS:
            return {movieWatchlistLoading:false, movieWatchlistDetails:action.payload }


        case WatchlistActionType.MOVIE_WATCHLIST_FAIL:
            return {movieWatchlistLoading:false , error:action.payload}

        case WatchlistActionType.MOVIE_WATCHLIST_ADD_REQUEST:
            return {movieWatchlistLoading:true}

        case WatchlistActionType.MOVIE_WATCHLIST_ADD_SUSSCESS:
            return {movieWatchlistLoading:false, movieWatchlistDetails:action.payload }


        case WatchlistActionType.MOVIE_WATCHLIST_ADD_FAIL:
            return {movieWatchlistLoading:false , error:action.payload}

        case WatchlistActionType.MOVIE_WATCHLIST_DELETE_REQUEST:
            return {movieWatchlistLoading:true}

        case WatchlistActionType.MOVIE_WATCHLIST_DELETE_SUSSCESS:
            return {movieWatchlistLoading:false, movieWatchlistDetails:action.payload }


        case WatchlistActionType.MOVIE_WATCHLIST_DELETE_FAIL:
            return {movieWatchlistLoading:false , error:action.payload}


        default:
            return state

        

    }

}





export const seriesWatchlistReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case WatchlistActionType.SERIES_WATCHLIST_REQUEST:
            return {seriesWatchlistLoading:true}

        case WatchlistActionType.SERIES_WATCHLIST_SUSSCESS:
            return {seriesWatchlistLoading:false, seriesWatchlistDetails:action.payload }


        case WatchlistActionType.SERIES_WATCHLIST_FAIL:
            return {seriesWatchlistLoading:false , error:action.payload}

        case WatchlistActionType.SERIES_WATCHLIST_ADD_REQUEST:
            return {seriesWatchlistLoading:true}

        case WatchlistActionType.SERIES_WATCHLIST_ADD_SUSSCESS:
            return {seriesWatchlistLoading:false, seriesWatchlistDetails:action.payload }


        case WatchlistActionType.SERIES_WATCHLIST_ADD_FAIL:
            return {seriesWatchlistLoading:false , error:action.payload}

        case WatchlistActionType.SERIES_WATCHLIST_DELETE_REQUEST:
            return {seriesWatchlistLoading:true}

        case WatchlistActionType.SERIES_WATCHLIST_DELETE_SUSSCESS:
            return {seriesWatchlistLoading:false, seriesWatchlistDetails:action.payload }


        case WatchlistActionType.SERIES_WATCHLIST_DELETE_FAIL:
            return {seriesWatchlistLoading:false , error:action.payload}


        default:
            return state

        

    }

}