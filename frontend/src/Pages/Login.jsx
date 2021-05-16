import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.png'

import {useState, useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {login} from '../redux/user/user.Action'



const MainContainer = styled.div``

const LoginHeader = styled.div`
    display:flex;
    width:100%;
    justify-content:space-between;
    background-color:transparent;
    position:fixed;
    img{
        height:80px;

    }
    a{
        background-color:#ff0000;
        
        border-radius:5px;
        
        padding:9px;
        border:none;
        outline:none;
        text-decoration:none;
        
        font-weight:600;
        color:white;
        
        
    }
    #link-div{
        margin-top:18px;
        margin-right:20px;
    }
    
`

const FrontScreen = styled.div`
    background-image:url('https://res.cloudinary.com/dbi3j4bvc/image/upload/v1620625222/NexusVideo/marvel_rpa35t.jpg');
    height:100vh;
    width:100%;
    justify-content:center;
    display:flex;
`

const LoginContainer = styled.div`

height:470px;
width:400px;
min-width:350px;
background-color: rgba(0,0,0,0.8);
color:white;
margin-top: 20vh;
border-radius:7px;

`
const LoginForm = styled.form`
#error-message{
    margin-left:41px;
    color:white;
    background-color:red;
    border-radius:5px;
    font-size:12px;
    margin-right:40px;
    padding-left:10px;

}
label{
    margin-left:41px;
    font-weight:500;
    
}
h4{
    font-size:25px;
    padding-left:30px;
}
button{
    margin:auto;
    background-color:#ff0000;
    margin: 2px 40px 10px 40px;
    border-radius:5px;
    padding: 11px 7px 11px 7px;
    border:none;
    outline:none;
    width:80%;
    margin-top:24px;
    font-weight:600;
    color:white;
    cursor: pointer;
}
`

const InputContainer = styled.div`
    
    margin:auto;
    background-color:#292b2c;
    margin: 2px 40px 10px 40px;
    border-radius:3px;
    padding: 11px 7px 11px 7px;
    

    input{
        background-color:transparent;
        outline:none;
        border:none;
        width:100%;
        color:white;
        margin-left:10px;
        padding: 2px 10px 2px 10px;
        font-size:14px;
        font-weight:600;
        font-family: 'Playfair Display', serif;

    }
    
`
const BottomSection = styled.div`
    p{
        text-align:center;
    }
    a{
        text-decoration:none;
        color:red;
    }

`

function Login({location, history}) {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    
    
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const userLogin = useSelector(state=> state.login)

    const {error,loading,userInfo} = userLogin


    const submitHandler = (e) =>{
        e.preventDefault()
        if(email&&password){
            dispatch(login(email.toLowerCase(),password))
            console.log(email+password)
        }
        else{
            console.log('please enter the values')
        }
        
        
    }
    
  

    useEffect(() => {
        if(userInfo){
            history.push('home')
        }
    }, [history,userInfo])

    return (
        
        <MainContainer>
            <LoginHeader>
                <img src={Logo} alt="Nexus Logo" />
                <div id="link-div" ><Link to='/register' >Register</Link></div>
                
            </LoginHeader>
            <FrontScreen>
                <LoginContainer>
                    <LoginForm onSubmit={submitHandler} >
                        <h4>Welcome Back </h4>
                        {error?<p id='error-message' >{error} </p>:''}
                        <label id="email-label" htmlFor="email">Email</label>
                        <InputContainer>
                            
                            <input onChange={(e)=>setEmail(e.currentTarget.value)} required placeholder='Email' type='email' />
                        </InputContainer>
                        <label id="password-label" htmlFor="password">Password</label>
                        <InputContainer>
                            
                            <input onChange={(e)=>setPassword(e.currentTarget.value)} required placeholder='Password' type='password' />
                        </InputContainer>

                        <button type='submit' >Login</button>
                        

                    </LoginForm>
                    <BottomSection >
                        <p>Don't have an Accout <Link to={redirect ? `/register?rediredct=${redirect}` : '/register'} >Register Now</Link> </p>
                        
                    </BottomSection>
                </LoginContainer>

            </FrontScreen>

        </MainContainer>
    )
}

export default Login
