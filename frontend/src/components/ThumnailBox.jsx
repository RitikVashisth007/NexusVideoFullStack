import React from 'react'
import styled from 'styled-components'

import {Link} from 'react-router-dom'




const MainContainer = styled.div`
    cursor: pointer;
    max-height:250px;
    transition-duration:1s;
    transition-delay:0.2s;
    display:inline-block;
    padding-left:10px;
    
    a{
        color:white;
        text-decoration:none;
    }

    
    img{
        
        width:250px;
        height:150px;
        object-fit:cover;
        border-radius:5px;
        margin-top:5px;
        transition-duration:1s;
        
        
        
    }
    img::hover{
        transform:scale(1.1) !important;
    }
    
    
    :hover{
        transform:scale(1.1) !important;
        background-color:rgba(0,0,0,0.8);
        border-radius:10px;
        
    }

    #title{
        margin-top:-3px;
        font-size:13px;
        font-weight:500;
        
        
    }

    
   .genres-date{
       display:flex;
       justify-content:space-between;
       font-size:9px;
       font-weight:300;
       margin-top:-18px;
       padding: 0 3px;
   }
  
    
    
    
    
`


function ThumnailBox({item}) {

    

   
    
    return (
        <MainContainer >
            <Link   to= {`/detail/${item.contentType}/${ item.customID?item.customID:item.id}`}  >
            <img  src={item.poster?`${item.poster}`:''} alt="thumnail pic" />
            <p id='title'>{item.title}</p>
            <div className='genres-date' ><p>{item.genres}</p> <p>{item.releaseDate.slice(0,4)}</p> </div>
            </Link>
            
            
        </MainContainer>

    )
}

export default ThumnailBox
