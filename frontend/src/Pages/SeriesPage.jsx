import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useSelector,useDispatch} from 'react-redux'
import {seriesAction} from '../redux/content/content.action'
import ThumnailBox from '../components/ThumnailBox'
import Carousel from 'react-elastic-carousel'
import Front from '../components/Front'
import SingleDetails from '../components/SingleDetails'
import { seriesWatchlistAction } from '../redux/watchlist/watchlist.Action'

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


function SeriesPage() {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]

    const seriesSelector = useSelector(state => state.seriesDetails)
    const seriesWatchlistSelector = useSelector(state => state.seriesWatchlistDetails)
    const {seriesWatchlistLoading,seriesWatchlistDetails} = seriesWatchlistSelector
    const userSelector = useSelector(state => state.login)
    const {userInfo} = userSelector
    const token = userInfo.token
    
    

    const dispatch = useDispatch()

    const [random, setRandom] = useState([])

    

    const {loading,seriesDetails} = seriesSelector
    useEffect(() => {
        dispatch(seriesAction())
        dispatch(seriesWatchlistAction(token))
        
    }, [dispatch])

    useEffect(() => {
        setRandom(Math.floor(Math.random()*33))
       
    },[])


    
    // console.log(seriesDetails);

    return (
        <MainContainer>
                <Front contentDetails={seriesDetails&&seriesDetails[random]} />
                <Down>

                {seriesWatchlistLoading?<h2>LOading</h2>:seriesWatchlistDetails&&seriesWatchlistDetails!=0&&
                <FirstSection>
                    <p id='slide-type' >Watchlist</p>
                    {/* Thumnail have Custom link based on customID and id */}
                        <Carousel breakPoints={breakPoints} showEmptySlots  >
                            {seriesWatchlistLoading?<h2>Loading</h2>:seriesWatchlistDetails&&seriesWatchlistDetails.slice(0,12).map((item)=> <ThumnailBox key={item.id} item={item.series}/>)}
                        </Carousel>

                </FirstSection>
            }


                    <p id='slide-type' >Trending</p>
                    <FirstSection>
                        {loading?<h2>LOading</h2>:seriesDetails&&
                            <Carousel breakPoints={breakPoints}  >
                                {loading?<h2>LOading</h2>:seriesDetails&&seriesDetails.slice(0,10).map((item)=> <ThumnailBox key={item.id} item={item}/>)}
                            </Carousel>}

                    </FirstSection>
                    <p id='slide-type' >Sci-Fi</p>
                    <FirstSection>
                        {loading?<h2>LOading</h2>:seriesDetails&&
                            <Carousel breakPoints={breakPoints}  >
                                {loading?<h2>LOading</h2>:seriesDetails&&seriesDetails.slice(0,15).filter(item=>item.genres.toLowerCase().includes('sci-fi')).map((item)=> <ThumnailBox key={item.id} item={item}/>)}
                            </Carousel>}

                    </FirstSection>
                    <SingleDetails contentDetails={seriesDetails&&seriesDetails[Math.floor(Math.random()*14)]} />
                    <p id='slide-type' >Action</p>
                    <FirstSection>
                        {loading?<h2>LOading</h2>:seriesDetails&&
                            <Carousel breakPoints={breakPoints}  >
                                {loading?<h2>LOading</h2>:seriesDetails&&seriesDetails.slice(0,15).filter(item=>item.genres.toLowerCase().includes('action')).map((item)=> <ThumnailBox key={item.id} item={item}/>)}
                            </Carousel>}

                    </FirstSection>

                </Down>
        </MainContainer>

    )
}

export default SeriesPage
