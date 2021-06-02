import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.png'

import {useState, useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {register} from '../redux/user/user.Action'



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
    background-repeat:no-repeat;
    background-size:cover;
    
`

const LoginContainer = styled.div`


width:400px;
min-width:350px;
background-color: rgba(0,0,0,0.8);
color:white;
margin-top: 10vh;
border-radius:7px;
margin-bottom:8px;

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



function Register({location,history}) { 

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [comfirmPassword, setComfirmPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const userLogin = useSelector(state=> state.login)

    const {error,loading,userInfo} = userLogin
    const dispatch = useDispatch()


    const submitHandler = (e) =>{
        e.preventDefault()
        if(password===comfirmPassword){
            console.log(password)
            if(name&&email){
                if(password.length>6){
                    dispatch(register(email.toLowerCase(),password, name))
                    
                }
                else{
                    setErrorMessage('Password is short')
                }
                
            }
            else{
                setErrorMessage('Enter All Details')
            }
            
        }
        else{
            setErrorMessage('Password is not same')
        }
        
        
    }
    

    useEffect(() => {
        if(userInfo){
            history.push('/')
        }
    }, [history,userInfo])


    return (
        
        <MainContainer>
            <LoginHeader>
                <img src={Logo} alt="Nexus Logo" />
                <div id="link-div" ><Link to='/login' >Login</Link></div>
                
            </LoginHeader>
            <FrontScreen>
                <LoginContainer>
                    <LoginForm onSubmit={submitHandler}>
                        <h4> Register Now </h4>
                        {error?<p id='error-message' >{error} </p>:''}
                        {errorMessage?<p id='error-message' >{errorMessage} </p>:''}
                        <label  htmlFor="name">Name</label>
                        <InputContainer>
                            
                            <input onChange={(e)=>setName(e.currentTarget.value)} required placeholder='Name' type='text' />
                        </InputContainer>
                        <label  htmlFor="email">Email</label>
                        <InputContainer>
                            
                            <input onChange={(e)=>setEmail(e.currentTarget.value)} required placeholder='Email' type='email' />
                        </InputContainer>
                        <label  htmlFor="password">Password</label>
                        <InputContainer>
                            
                            <input onChange={(e)=>setPassword(e.currentTarget.value)} required placeholder='Password' type='password' />
                        </InputContainer>
                        <label  htmlFor="password">Comfirm Password</label>
                        <InputContainer>
                            
                            <input onChange={(e)=>setComfirmPassword(e.currentTarget.value)} required placeholder='Comfirm Password' type='password' />
                        </InputContainer>

                        <button  type='submit' >Register</button>
                        

                    </LoginForm>
                    <BottomSection >
                        <p>Already have an Accout <Link to={redirect ? `/login?rediredct=${redirect}` : '/login'} >Login</Link> </p>
                        
                    </BottomSection>
                </LoginContainer>

            </FrontScreen>

        </MainContainer>
    )
}

export default Register
