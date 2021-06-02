import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useSelector,useDispatch} from 'react-redux'
import {movieAction} from '../redux/content/content.action'
import ThumnailBox from '../components/ThumnailBox'
import Carousel from 'react-elastic-carousel'
import Front from '../components/Front'
import SingleDetails from '../components/SingleDetails'
import { movieWatchlistAction } from '../redux/watchlist/watchlist.Action'

const MainContainer = styled.div`

`

const FirstSection = styled.div`   

        

`
const Down = styled.div`
    #slide-type{
        padding-left:50px;
        font-weight:600;
        margin-bottom:-2px;
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


function MoviePage() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]

    const movieSelector = useSelector(state => state.movieDetails)

    const movieWatchlistSelector = useSelector(state => state.movieWatchlistDetails)
    const {movieWatchlistLoading, movieWatchlistDetails} = movieWatchlistSelector
    const userSelector = useSelector(state => state.login)
    const {userInfo} = userSelector
    const token = userInfo.token
  

    const dispatch = useDispatch()

    
    const [random, setRandom] = useState([])
    const {loading,movieDetails} = movieSelector
    useEffect(() => {
        dispatch(movieAction())
        dispatch(movieWatchlistAction(token))
        

        
    }, [dispatch])


    useEffect(() => {
        setRandom(Math.floor(Math.random()*33))
       
    },[])

    

    // console.log(random)
    
    

    return (
        <MainContainer>
                <Front contentDetails={movieDetails&&movieDetails[random]} />  
                <Down>


                {movieWatchlistLoading?<h2>LOading</h2>:movieWatchlistDetails&&movieWatchlistDetails!=0&&
                <FirstSection>
                    <p id='slide-type' >Watchlist</p>
                   
                        <Carousel breakPoints={breakPoints} showEmptySlots  >
                            {movieWatchlistLoading?<h2>Loading</h2>:movieWatchlistDetails&&movieWatchlistDetails.slice(0,12).map((item)=> <ThumnailBox key={item.id} item={item.movie}/>)}
                        </Carousel>

                </FirstSection>
            }


                    <p id='slide-type' >Popular Picks</p>
                    <FirstSection>
                        {loading?<h2>LOading</h2>:movieDetails&&
                            <Carousel breakPoints={breakPoints}  >
                                {loading?<h2>LOading</h2>:movieDetails&&movieDetails.slice(5,15).map((item)=> <ThumnailBox key={item.id} item={item}/>)}
                            </Carousel>}

                    </FirstSection>
                    <p id='slide-type' >Sci-Fi</p>
                    <FirstSection>
                        {loading?<h2>LOading</h2>:movieDetails&&
                            <Carousel breakPoints={breakPoints}  >
                                {loading?<h2>LOading</h2>:movieDetails&&movieDetails.slice(0,15).filter(item=>item.genres.toLowerCase().includes('sci-fi')).map((item)=> <ThumnailBox key={item.id} item={item}/>)}
                            </Carousel>}

                    </FirstSection>
                    
                    <SingleDetails contentDetails={movieDetails&&movieDetails[Math.floor(Math.random()*14)]} />

                    <p id='slide-type' >Action</p>
                    <FirstSection>
                        {loading?<h2>LOading</h2>:movieDetails&&
                            <Carousel breakPoints={breakPoints}  >
                                {loading?<h2>LOading</h2>:movieDetails&&movieDetails.slice(3,15).filter(item=>item.genres.toLowerCase().includes('action')).map((item)=> <ThumnailBox key={item.id} item={item}/>)}
                            </Carousel>}

                    </FirstSection>
                    <p id='slide-type' >Marvel</p>
                    <FirstSection>
                        {loading?<h2>LOading</h2>:movieDetails&&
                            <Carousel breakPoints={breakPoints}  >
                                {loading?<h2>LOading</h2>:movieDetails&&movieDetails.filter(item=>item.genres.toLowerCase().includes('marvel')).map((item)=> <ThumnailBox key={item.id} item={item}/>)}
                            </Carousel>}

                    </FirstSection>

                </Down>
        </MainContainer>

    )
}

export default MoviePage
