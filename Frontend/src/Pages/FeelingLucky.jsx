import React, {useEffect, useState} from 'react'

import styled from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import { feelingLuckyAction } from '../redux/feelinglucky/feelinglucky.action'
import {FaPlay ,FaWindowClose} from 'react-icons/fa';
import ReactModal from 'react-modal';



const MainContainer = styled.div `

`

const Details = styled.div `
    height: 100vh;
    width: auto;
    max-width: 100vw;
    
    .imageContainer{
        img{
            max-width: 100%;
            max-height: 100%;
            
        }
    }
    .play-details{
        position: absolute;
        top:55vh; 
        right:50px;
    }

    .video-play-button{
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
    h3{
        font-size: 39px;
        font-weight: 700;
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
    video{
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }


`



function FeelingLucky() {

    const {feelingluckyLoading, feelingluckyDetails} = useSelector(state => state.feelingluckyDetails)
    console.log(feelingluckyDetails);


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(feelingLuckyAction())
    }, [dispatch])

    const [model, setModel] = useState(false)



    return (
        <MainContainer>
            {
                feelingluckyLoading?<h2>Loading</h2>:
                feelingluckyDetails&&
                
                
                <Details>
 
                        <div className='imageContainer' >
                            <img src={feelingluckyDetails[0].poster} alt={feelingluckyDetails[0].title} />
                        </div>
                        <div className='play-details' >
                            <div>
                                <h3>{feelingluckyDetails[0].title}</h3>
                                <button className='video-play-button' onClick={()=>setModel(true)} > <FaPlay/> Watch Now</button>

                            </div>
                            
                            
                        </div>
                        

                        <ReactModal  ariaHideApp={false} isOpen={model}  onRequestClose={()=>setModel(false)} 
                        style={{
                            overlay: {
                            position: 'fixed',
                            
                            backgroundColor: 'rgba(0,0,0,0.8)',
                            zIndex:20,
                            
                            

                            },
                            content: {
                            position: 'absolute',
                            
                            
                            background: 'black',
                            
                            WebkitOverflowScrolling: 'touch',
                            
                            outline: 'none',
                            border:'none',
                            
                            zIndex:20,
                            }
                        }}
                    
                    >
                        
                        <FullScreen>
                            <video src={feelingluckyDetails[0].link} controls ></video>
                            <button  className='close-button' onClick={()=>setModel(false)} > <FaWindowClose/> </button>
                        </FullScreen>
                        
                    </ReactModal>
                </Details>
            }



        </MainContainer>
    )
}

export default FeelingLucky
