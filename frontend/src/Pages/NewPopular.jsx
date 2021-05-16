import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useSelector,useDispatch} from 'react-redux'
import {movieAction, seriesAction} from '../redux/content/content.action'
import ThumnailBox from '../components/ThumnailBox'

import Carousel from 'react-elastic-carousel'

import SingleDetails from '../components/SingleDetails'






 



const MainContainer = styled.div`

video{
    max-width:100vw;
    width:100%;
    max-height:100vh;
    object-fit: cover;
}



` 

   

const Down = styled.div`
    padding-top:15px;
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



function NewPopular() {

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
    const dispatch = useDispatch()

    

    const {loading,movieDetails} = movieSelector
    const {seriesDetails} = seriesSelector

     
    
    
   

    

    useEffect(() => {
        dispatch(movieAction())
        dispatch(seriesAction())
        
    }, [dispatch])



    // console.log(movieDetails&&movieDetails[Math.floor(Math.random()*30)]);
    


    return (
        <MainContainer>
    
            <Down>
             <SingleDetails  contentDetails={movieDetails&&movieDetails[Math.floor(Math.random()*14)]} />
                
                <FirstSection>
                    {loading?<h2>LOading</h2>:movieDetails&&
                        <Carousel breakPoints={breakPoints}  >
                            {loading?<h2>LOading</h2>:movieDetails&&movieDetails.slice(25,35).map((item)=> <ThumnailBox key={item.id} item={item}/>)}
                        </Carousel>}

                </FirstSection>
                <FirstSection>
                    {loading?<h2>LOading</h2>:seriesDetails&&
                        <Carousel breakPoints={breakPoints}  >
                            {loading?<h2>LOading</h2>:seriesDetails&&seriesDetails.slice(5,20).map((item)=> <ThumnailBox key={item.id} item={item}/>)}
                        </Carousel>}

                </FirstSection>
                <FirstSection>
                    {loading?<h2>LOading</h2>:movieDetails&&
                        <Carousel breakPoints={breakPoints}  >
                            {loading?<h2>LOading</h2>:movieDetails&&movieDetails.filter(item=>item.genres.toLowerCase().includes('marvel')).map((item)=> <ThumnailBox key={item.id} item={item}/>)}
                        </Carousel>}

                </FirstSection>

                <FirstSection>
                    {loading?<h2>LOading</h2>:movieDetails&&
                        <Carousel breakPoints={breakPoints}  >
                            {loading?<h2>LOading</h2>:movieDetails&&movieDetails.slice(3,15).filter(item=>item.genres.toLowerCase().includes('comedy')).map((item)=> <ThumnailBox key={item.id} item={item}/>)}
                        </Carousel>}

                </FirstSection>
                
                
                <FirstSection>
                    {loading?<h2>LOading</h2>:movieDetails&&
                        <Carousel breakPoints={breakPoints}  >
                            {loading?<h2>LOading</h2>:movieDetails&&movieDetails.slice(2,15).filter(item=>item.genres.toLowerCase().includes('action')).map((item)=> <ThumnailBox key={item.id} item={item}/>)}
                        </Carousel>}

                </FirstSection>

                
                


                
                
                
            </Down>
            


        </MainContainer> 
    )
} 

export default NewPopular
