import React, {useState} from 'react'

import styled from 'styled-components'

import {FaPlay} from 'react-icons/fa'
import {AiOutlineInfoCircle,AiFillCloseCircle } from 'react-icons/ai'

import {Link} from 'react-router-dom'
import ReactModal from 'react-modal';


const MainContainer = styled.div`
    height:85vh;

    a{
        text-decoration:none;
        color:white;
    }
`

const DetailContainer = styled.div`
    img{
        width:100%;
        height:85vh;
        object-fit:cover;
    }

    .content-details{
        position:absolute;
        top:35vh;
        display:flex;
        width:80%;
        padding-left:10vw;
        justify-content:space-between;
        font-family: 'Dosis', sans-serif;
    }


    #title{
        font-size:47px;
        font-weight:700;
        margin-bottom:9px;
        cursor:default;

    }
    .watchNow-button{
        background-color:#ff033e;
        color:white;
        height:37px;
        width:175px;
        outline:none;
        cursor: pointer;
        border:none;
        border-radius:5px;
        font-size:17px;
        font-weight:600;
        text-transform:uppercase;
        padding:2px;
        text-shadow: 0.5px 1px white;
        transition-duration:0.5s;
        box-shadow: 1px 1px 1px 1px crimson;
        
        
        
        :hover{
            box-shadow: 1px 1px 2px 2px #203340;
            background-color: #203340;

        }

    }
    #play-icon-button{
        font-size:17px;
    }

    .moreInfo-button{
        background-color:rgba(255, 3, 62,0.2);
        color:white;
        height:37px;
        width:175px;
        outline:none;
        cursor: pointer;
        border:none;
        border-radius:5px;
        font-size:17px;
        font-weight:600;
        text-transform:uppercase;
        padding:2px;
        text-shadow: 0.5px 1px white;
        transition-duration:0.5s;
        box-shadow: 1px 1px 1px 1px crimson;
        margin-top:101px;
        :hover{
            background-color:crimson;
        }
    }

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


`

const IframeVideo = styled.iframe`
    width:95vw;
    height:100vh;
    border:none;
    top:-50px;
    object-fit:cover;
    
`



function Front({contentDetails}) {

    
    // console.log(seriesDetails);
    const [model, setModel] = useState(false)
 
    return (
        <MainContainer>
            {contentDetails?
            <DetailContainer>
                 <img src={contentDetails.poster} alt="" />
                 <div className='content-details' >
                     <div>
                         <h2 id='title'>{contentDetails.title}</h2>
                         <button onClick={()=>setModel(true)} className='watchNow-button' > <FaPlay id='play-icon-button' /> &nbsp;&nbsp; Watch Now</button>
                     </div>
                     <div>
                         <Link
                            to={{
                                pathname: `/detail?${contentDetails.title}`,
                                state: { item: contentDetails },
                                }}  
                         >
                        <button className='moreInfo-button' > <AiOutlineInfoCircle  /> &nbsp;&nbsp; More Info</button>

                        </Link>
                     </div>

                 </div>
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

            : <h2>Loading</h2>
        }




           
        </MainContainer>
    )
}

export default Front
