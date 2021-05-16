import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const MainContainer = styled.div`
    
    video{
        
        width:100%;

    }
    p{
        position:absolute;
        font-size:40px;
        top:42vh;
        left:33vw;
        font-weight:600;
    }
    a{
        color:red;
        font-size:40px;
        font-weight:700;
    }

`


function Lost() {
    return (
        <MainContainer>
            <video autoPlay loop   src="https://res.cloudinary.com/dbi3j4bvc/video/upload/v1617263791/samples/sea-turtle.mp4" />
                <p>Lost Go Back to <Link to='/' >Home</Link> </p>
        </MainContainer>
    )
}

export default Lost
