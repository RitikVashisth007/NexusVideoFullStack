import WatchlistActionType from './watchlist.ActionType'
import axios from 'axios'




export const movieWatchlistAction = (token) => async(dispatch) =>{
    
    try {
        dispatch(
            {
                type:WatchlistActionType.MOVIE_WATCHLIST_REQUEST
            }
        )


        const config = {
            headers: {
                Authorization:`Nexus ${token}`,
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.get('watchlist/movie' , 
            config
        
        )

       

        dispatch({
            type:WatchlistActionType.MOVIE_WATCHLIST_SUSSCESS,
            payload:data,
        })

        
        
    } catch (error) {
        dispatch({
            type:WatchlistActionType.MOVIE_WATCHLIST_FAIL,
            payload:'Something goes Wrong in fetching the Watchlist'
        })
        
    }

}



export const movieWatchlistAddAction = (id, token) => async(dispatch) =>{
    
    try {
        dispatch(
            {
                type:WatchlistActionType.MOVIE_WATCHLIST_ADD_REQUEST
            }
        )

        const config = {
            headers: {
                Authorization: `Nexus ${token}`,
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.post('watchlist/movie' , 
            { 'movieID': id},
            config
        
        )

       

        dispatch({
            type:WatchlistActionType.MOVIE_WATCHLIST_ADD_SUSSCESS,
            payload:data,
        })

       
        
    } catch (error) {
        dispatch({
            type:WatchlistActionType.MOVIE_WATCHLIST_ADD_FAIL,
            payload:'Something goes Wrong in fetching the Watchlist'
        })
        
    }

}




export const movieWatchlistDeleteAction = (id,token) => async(dispatch) =>{
    
    try {
        dispatch(
            {
                type:WatchlistActionType.MOVIE_WATCHLIST_DELETE_REQUEST
            }
        )
 
       

        const {data} = await axios.delete('watchlist/movie' , {
            headers: {
                Authorization: `Nexus ${token}`,
                'Content-type': 'application/json'
            },
            data:{
                'movieID': id
            },
            }
            
        
            
        
        )

       

        dispatch({
            type:WatchlistActionType.MOVIE_WATCHLIST_DELETE_SUSSCESS,
            payload:data,
        })


        
    } catch (error) {
        dispatch({
            type:WatchlistActionType.MOVIE_WATCHLIST_DELETE_FAIL,
            payload:'Something goes Wrong in fetching the Watchlist'
        })
        
    }

}








export const seriesWatchlistAction = ( token) => async(dispatch) =>{
    
    try {
        dispatch(
            {
                type:WatchlistActionType.SERIES_WATCHLIST_ADD_REQUEST
            }
        )

        const config = {
            headers: {
                Authorization:`Nexus ${token}`,
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.get('watchlist/series' , 
            config
        
        )

       

        dispatch({
            type:WatchlistActionType.SERIES_WATCHLIST_ADD_SUSSCESS,
            payload:data,
        })


        
    } catch (error) {
        dispatch({
            type:WatchlistActionType.SERIES_WATCHLIST_ADD_FAIL,
            payload:'Something goes Wrong in fetching the Watchlist'
        })
        
    }

}




export const seriesWatchlistAddAction = (id, token) => async(dispatch) =>{
    
    try {
        dispatch(
            {
                type:WatchlistActionType.SERIES_WATCHLIST_ADD_REQUEST
            }
        )

        const config = {
            headers: {
                Authorization: `Nexus ${token}`,
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.post('watchlist/series' , 
            { 'seriesID': id},
            config
        
        )

       

        dispatch({
            type:WatchlistActionType.SERIES_WATCHLIST_ADD_SUSSCESS,
            payload:data,
        })

       
        
    } catch (error) {
        dispatch({
            type:WatchlistActionType.SERIES_WATCHLIST_ADD_FAIL,
            payload:'Something goes Wrong in fetching the Watchlist'
        })
        
    }

}




export const seriesWatchlistDeleteAction = (id,token) => async(dispatch) =>{
    
    try {
        dispatch(
            {
                type:WatchlistActionType.SERIES_WATCHLIST_DELETE_REQUEST
            }
        )
 
       

        const {data} = await axios.delete('watchlist/series' , {
            headers: {
                Authorization: `Nexus ${token}`,
                'Content-type': 'application/json'
            },
            data:{
                'seriesID': id
            },
            }
            
        
            
        
        )

       

        dispatch({
            type:WatchlistActionType.SERIES_WATCHLIST_DELETE_SUSSCESS,
            payload:data,
        })

        
        
    } catch (error) {
        dispatch({
            type:WatchlistActionType.SERIES_WATCHLIST_DELETE_FAIL,
            payload:'Something goes Wrong in fetching the Watchlist'
        })
    }
}