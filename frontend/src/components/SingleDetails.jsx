import React, {useState} from 'react'
import {FaPlay,FaPlus} from 'react-icons/fa';
import styled from 'styled-components'


import {AiOutlineInfoCircle,AiFillCloseCircle } from 'react-icons/ai'
import {Link} from 'react-router-dom'
import ReactModal from 'react-modal';



const MainContainer = styled.div`
    padding-top:10px;
   
    
`

const DetailContainer = styled.div`
   color:grey;
   display:grid;
   grid-template-columns:30% 70%;
   max-width:97vw;
   height:350px;
   margin:auto;
   background-color: #000000;
   
    
   
   

    
`
const MovieDetails = styled.div`
    background-color:black;
    box-shadow:  70px 0px 50px 25px rgba(0,0,0,1); 
    padding-top:20px;
    cursor: default;
    padding-left:40px;
    
    
    z-index:5;

    h3{
        font-size:25px;
        font-weight:800;
        font-family: 'Dosis', sans-serif;
    }

    
    .genres-year{
        display:flex;
        font-weight:500;
        justify-content:space-between;
        padding-right:20px;
        font-size:11px;
        margin-top:-15px;
        
    }
    .play-watchlist{
        display:flex;
     
        justify-content:space-between;
        padding-right:20px;
        font-size:11px;
        margin-top:60px;
        
   
    }
    .video-play-button{
        background-color:transparent;
        outline:none;
        border:none;
        color:grey;
        font-size:22px;
        font-weight:600;
        padding-bottom:12px;
        cursor: pointer;
        transition-duration:0.5s;
        :hover{
            color:white;
           

        }
        
    }

    .moreInfo-button{
        background-color:rgba(255, 3, 62,0.2);
        color:white;
        height:35px;
        width:150px;
        outline:none;
        cursor: pointer;
        border:none;
        border-radius:5px;
        font-size:14px;
        font-weight:600;
        text-transform:uppercase;
        padding:1px;
        
        text-shadow: 0.5px 1px white;
        transition-duration:0.5s;
        box-shadow: 1px 1px 1px 1px crimson;
        
        :hover{
            background-color:crimson;
        }
    }
    
`
const MovieImage = styled.div`
    box-shadow: rgba(0, 0, 0, 0.9) 5px 5px 55px inset;
    
    float:right;
    img{
        width:100%;
        max-height:350px;
       
        
        /* filter: drop-shadow(0px 6px 3px red); */
        /* box-shadow: red 5px 5px 55px inset; */
        border-radius:8px;
        
        
    
        
        
    }



`
const IframeVideo = styled.iframe`
    width:95vw;
    height:100vh;
    border:none;
    top:-50px;
    object-fit:cover;
    
`
const FullScreen = styled.div`
    .close-button{
        position:absolute;
        top:5px;
        right:5px;
        color:grey;
        border:none;
        outline:none;
        background-color:transparent;
        font-size:45px;
        cursor: pointer;
        transition-duration:0.5s;
        :hover{
            color:#cacaca;
            
        }
    }
    
    .ytp-chrome-top{
        display:none !important;
    }
    .ytp-show-cards-title{
        display:none !important;
    }

`


function SingleDetails({contentDetails}) {

    
    
    const [model, setModel] = useState(false)
 
    return (
        <MainContainer>
            {contentDetails?
            <DetailContainer  >
                    
                    
                    <MovieDetails>
                        <h3>{contentDetails.title}</h3>
                        <div className='genres-year'>
                            <p >{contentDetails.genres}</p>
                            <p>{contentDetails.releaseDate.slice(0,4)}</p>
                            
                            </div>
                        
                        

                        <div className='play-watchlist'>
                            
                            <button className='video-play-button' onClick={()=>setModel(true)} > <FaPlay/> Watch Now</button>
                            <div >
                            <Link 
                            to= {`/detail/${contentDetails.contentType}/${contentDetails.id}`}   
                            >
                            <button className='moreInfo-button' > <AiOutlineInfoCircle  /> &nbsp;&nbsp; More Info</button>

                            </Link>
                            </div>

                        </div>
                        
                    </MovieDetails>
                    <MovieImage>
                        <img src={contentDetails.poster} alt={contentDetails.poster} />
                    </MovieImage>
                    <ReactModal  ariaHideApp={false} isOpen={model}  onRequestClose={()=>setModel(false)} 
                style={{
                    overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      zIndex:20,
                      

                    },
                    content: {
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '40',
                      bottom: '0',
                      
                      background: 'black',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      
                      outline: 'none',
                      border:'none',
                      padding: '20px',
                      zIndex:20,
                    }
                  }}
            
            >
                 
                <FullScreen>
                    <IframeVideo src={contentDetails.link+"?autoplay=1&loop=1&controls=0&showinfo=0"} >
                        

                    </IframeVideo>
                    <button  className='close-button' onClick={()=>setModel(false)} > <AiFillCloseCircle/> </button>
                 </FullScreen>
                 
            </ReactModal>
            </DetailContainer>
            : <h2>Loading</h2>}
           
        </MainContainer>
    )
}

export default SingleDetails
