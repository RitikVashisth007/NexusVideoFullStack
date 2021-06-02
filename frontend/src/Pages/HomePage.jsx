import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useSelector,useDispatch} from 'react-redux'
import {movieAction, seriesAction} from '../redux/content/content.action'
import {movieWatchlistAction, seriesWatchlistAction} from '../redux/watchlist/watchlist.Action'
import ThumnailBox from '../components/ThumnailBox'

import Carousel from 'react-elastic-carousel'
import Front from '../components/Front'
import SingleDetails from '../components/SingleDetails'
import {Link} from 'react-router-dom'





 



const MainContainer = styled.div`

video{
    max-width:100vw;
    width:100%;
    max-height:100vh;
    object-fit: cover;
}



` 

const FrontContainer = styled.div``     

const Down = styled.div`
    #slide-type{
        padding-left:50px;
        margin-bottom:5px;
        font-weight:600;
        margin-bottom:-2px;
        transition-duration:0.5s;
        
        :hover{
                color:white;
                
            }
        a{
            color:grey;
            text-decoration:none;
            transition-duration:0.5s;
            font-size:17px;
            font-weight:600;
            :hover{
                color:white;
                
            }
        }
    }
    .rec.rec-arrow {
        color:rgba(207,0,15,0.8);
        background-color:transparent;
        
        
    
}
    .rec.rec-arrow:hover{
        color:red;
        background-color:rgba(0,0,0,0.5);
        border:none;
    
}
    .rec-arrow-right{
        background-color:transparent;
        border:none;
        outline:none;
        
        position:absolute;
        right:0;
    }
    .rec-arrow-left{
        background-color:transparent;
        border:none;
        outline:none;
        
        position:absolute;
        left: -20px;
        z-index:13;
    }
    .rec-slider{
        margin-left:-25px;
        margin-right:-20px;
    }

    .rec-item-wrapper{
        margin-right:-25px;
        margin-left:-5px;
    }
    .rec-pagination{
        display:none;
    }
    


`

const FirstSection = styled.div`
    
    
    

`



function HomePage() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]
    
    const movieSelector = useSelector(state => state.movieDetails)
    const seriesSelector = useSelector(state => state.seriesDetails)
    const seriesWatchlistSelector = useSelector(state => state.seriesWatchlistDetails)
    const {seriesWatchlistLoading,seriesWatchlistDetails} = seriesWatchlistSelector
    const movieWatchlistSelector = useSelector(state => state.movieWatchlistDetails)
    const {movieWatchlistLoading, movieWatchlistDetails} = movieWatchlistSelector
    const userSelector = useSelector(state => state.login)
    const {userInfo} = userSelector
    const token = userInfo.token

    const mixedSeries = seriesWatchlistDetails?seriesWatchlistDetails.map(items => items.series) :[]
    const mixedMovie = movieWatchlistDetails?movieWatchlistDetails.map(items => items.movie) :[]
   

    const mixedWatchlist = mixedMovie.concat(mixedSeries)

   
    
    
    

    const dispatch = useDispatch()

    

    const {loading,movieDetails} = movieSelector
    const {seriesDetails} = seriesSelector



     
    
    
   
    const [random, setRandom] = useState([])
    

    useEffect(() => {
        dispatch(movieAction())
        dispatch(seriesAction())
        
        dispatch(movieWatchlistAction(token))
        dispatch(seriesWatchlistAction(token))
        
    }, [dispatch])

    useEffect(() => {
        setRandom(Math.floor(Math.random()*33))
       
    },[])


  


    // console.log(movieDetails&&movieDetails[Math.floor(Math.random()*30)]);
    
     

    return (
        <MainContainer>
            <FrontContainer>
                <Front contentDetails={random?movieDetails&&movieDetails[random]: <h2>Loading</h2> } />
            </FrontContainer>
            <Down>
            {seriesWatchlistLoading&&movieWatchlistLoading?<h2>LOading</h2>:mixedWatchlist&&mixedWatchlist.length!=0&&
                <FirstSection>
                    <p id='slide-type' >Watchlist</p>
                    {/* Thumnail have Custom link based on customID and id */}
                        <Carousel breakPoints={breakPoints} showEmptySlots  >
                            {seriesWatchlistLoading?<h2>Loading</h2>:mixedWatchlist&&mixedWatchlist.slice(0,12).map((item)=> <ThumnailBox key={`${item.id+item.title}`} item={item}/>)}
                        </Carousel>

                </FirstSection>
            }
            
                <p id='slide-type' >Latest Movies</p>
                <FirstSection>
                    {loading?<h2>LOading</h2>:movieDetails&&
                        <Carousel breakPoints={breakPoints} showEmptySlots >
                            {loading?<h2>LOading</h2>:movieDetails&&movieDetails.slice(9,25).map((item)=> <ThumnailBox key={item.id} item={item}/>)}
                        </Carousel>}

                </FirstSection>
                <p id='slide-type' >Marvel</p>
                <FirstSection>
                    {loading?<h2>LOading</h2>:movieDetails&&
                        <Carousel breakPoints={breakPoints} showEmptySlots >
                            {loading?<h2>LOading</h2>:movieDetails&&movieDetails.filter(item=>item.genres.toLowerCase().includes('marvel')).map((item)=> <ThumnailBox key={item.id} item={item}/>)}
                        </Carousel>}

                </FirstSection>
                <SingleDetails contentDetails={movieDetails&&movieDetails[Math.floor(Math.random()*30)]} />
                <p id='slide-type' >Action</p>
                <FirstSection>
                    {loading?<h2>LOading</h2>:movieDetails&&
                        <Carousel breakPoints={breakPoints} showEmptySlots  >
                            {loading?<h2>LOading</h2>:movieDetails&&movieDetails.slice(0,15).filter(item=>item.genres.toLowerCase().includes('action')).map((item)=> <ThumnailBox key={item.id} item={item}/>)}
                        </Carousel>}

                </FirstSection>

                <p id='slide-type' ><Link to='series' >Series</Link> </p>
                <FirstSection>
                    {loading?<h2>LOading</h2>:seriesDetails&&
                        <Carousel breakPoints={breakPoints} showEmptySlots >
                            {loading?<h2>LOading</h2>:seriesDetails&&seriesDetails.slice(5,20).map((item)=> <ThumnailBox key={item.id} item={item}/>)}
                        </Carousel>}

                </FirstSection>


                <p id='slide-type' >Comedy</p>
                <FirstSection>
                    {loading?<h2>LOading</h2>:movieDetails&&
                        <Carousel breakPoints={breakPoints} showEmptySlots >
                            {loading?<h2>LOading</h2>:movieDetails&&movieDetails.slice(0,15).filter(item=>item.genres.toLowerCase().includes('comedy')).map((item)=> <ThumnailBox key={item.id} item={item}/>)}
                        </Carousel>}

                </FirstSection>
                
            </Down>
            


        </MainContainer> 
    )
} 

export default HomePage
