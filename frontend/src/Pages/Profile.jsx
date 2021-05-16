import React from 'react'
import styled from 'styled-components'

import {useSelector} from 'react-redux'





const MainContainer = styled.div`
background-color:#292b2c;
width:100%;
height:100vh;
padding-top:19vh;

`

const ProfileInfo = styled.div`
    max-width:33vw;
    min-width:400px;
    margin:auto;
    
    background-color:rgba(0,0,0,0.2);
    max-height:50vh;
    min-height:400px;
    
    border-radius:13px;
    justify-content:center;
    padding-top:15px;
    text-align:center;
    
`

const UserInfo = styled.div`

img{
    height:80px;
    width:80px;
    border-radius:50%;
    object-fit:cover;
}
p{
    margin-top:-1px;
    margin-bottom:4px;
    font-size:13px;
    text-transform:capitalize;
    
}



`
const OtherDetails = styled.div`
    margin-top:30px;
    #line-div{
        height:6px;
        width:100%;
        background-color:#292b2c;
        
    }
    #plan-details{
        
        button{
            background-color:#1f80e0;
            outline:none;
            border:none;
            cursor: pointer;
            width:80%;
            height:34px;
            border-radius:4px;
            margin-top:-4px;
            font-size:14px;
            color:white;
            font-weight:600;
            text-transform:uppercase;
            
            
        }
        
    }
    

`



function Profile() {
    

    const userLogin = useSelector(state=> state.login)
    const {userInfo} = userLogin
    return (
        <MainContainer>
            <ProfileInfo>
                <UserInfo>
                        <img src="https://occ-0-3213-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZ2mdn_92ruEqx0QzXDv947nXRyeamVpcKT4xbR6N-51JGWihqgKLLIX9gO_E319FW3Qoqff4ujjappyQ8uskyFS6Q.png?r=a41" alt="userPic" />
                        <p>{userInfo.first_name}</p>
                        <p>{userInfo.email} </p>
                </UserInfo>
                <OtherDetails>
                    <div>
                        <div id='line-div' ></div>
                        <div id='plan-details'>
                            <p>Nexus Video Free trail </p>
                            <button>Upgrade Your plan </button>
                        </div>
                        <p>Edit Profile </p>
                        <p>Logout</p>
                        
                    </div>
                    
                </OtherDetails>
            </ProfileInfo>
            
            
        </MainContainer>
    )
}

export default Profile
