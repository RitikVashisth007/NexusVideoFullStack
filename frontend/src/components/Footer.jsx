import React from 'react'
import {Link} from 'react-router-dom'

import styled from 'styled-components'
import Logo from '../assets/logo.png'
import {FaGithub,FaInstagramSquare, FaTwitter} from 'react-icons/fa'


const SuperMianContainer = styled.div`
    background-color:black;
    
`

const MainContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-top:30px;
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-between;
    
}
    
`

const LogoContainer = styled.div`
img{
    height:70px;
    padding-left:20px;
    padding-top:5px;
}

`
const LinkContainer = styled.div `
    padding-top:17px;
    ul{
        display:flex;

    }
    li{
        list-style:none;
        
    }
    a{
        text-decoration:none;
        color:white;
        padding-left:10px;
        font-weight:500;
        
    }
    a:hover{
        font-weight:400;
        color:grey;
        
        
    }
    @media (max-width: 768px) {
        display: none;
    
}
    

`

const SocialLink = styled.div`
text-align:center;
padding-top:29px;
a{
    text-decoration:none;
    color:black;
    font-size:28px;
    padding-left:10px;
    
}
#insta{
    
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    border-radius:4px;
}
#git{
    color:grey;
}

#twitter{
    color:#1DA1F2;
}



`

const CopyWriteContainer = styled.div`

p{
    font-size:11px;
    font-weight:500;
    color:white;
    text-align:center;
    padding-bottom:20px
}
`

function Footer() {
    return (
        <SuperMianContainer>
        <MainContainer>
            <LogoContainer>
                <img src={Logo} alt="Nexus Logo" />
            </LogoContainer>
            <LinkContainer>
                <ul>
                    <li> <Link to=''>Home</Link> </li>
                    <li><Link to='/Movie'>Movies</Link></li>
                    <li><Link to='/Series'>Series</Link></li>
                    <li><Link to='/New'>New & Popular</Link></li>
                    
                </ul>
            </LinkContainer>
            <SocialLink>
                <a  rel="noreferrer"  href="https://github.com/RitikVashisth007" target="_blank"><FaGithub id="git" /></a>
                <a  rel="noreferrer"  href="https://www.instagram.com/ritik_vashisth007/" target="_blank"><FaInstagramSquare id="insta" /></a>
                <a rel="noreferrer"  href="https://www.instagram.com/ritik_vashisth007/" target="_blank"><FaTwitter id="twitter" /></a>
                
                
                
            </SocialLink>
            
        </MainContainer>

        <CopyWriteContainer>
            <p>copyright © 2021 All Right Reserved</p>
        </CopyWriteContainer>

        </SuperMianContainer>
    )
}

export default Footer
