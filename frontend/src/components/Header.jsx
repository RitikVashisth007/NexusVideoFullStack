import React,{useEffect,useState} from 'react'

import styled from 'styled-components'

import { Link} from 'react-router-dom'

import Logo from '../assets/logo.png'

import {GrSearch} from 'react-icons/gr'
import {IoMdArrowDropdown} from 'react-icons/io'


import {useSelector,useDispatch} from 'react-redux'
import {logout} from '../redux/user/user.Action'

import ReactModal from 'react-modal';

import ThumnailBox from '../components/ThumnailBox'
import {movieAction, seriesAction} from '../redux/content/content.action'




const MainHeader = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color:${({ scrolled }) => scrolled > 30 ? 'black' : scrolled<30?'transparent':'transparent' };
    transition: 0.4s all;
    color:white;
    position: fixed;
    width:100vw;
    z-index:10;

    
    
`
const LogoContainer = styled.div`
    img{
        max-width:120px;
        max-height:50px;
    }
    padding-left:25px;
    padding-top:2px;
`

const HeaderLinks = styled.div`
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
    
`

const UserSerach = styled.div`
    display:flex;
    justify-content:flex-end;
    padding-right:30px;
    
    


    .search-box {
  
        
        background: #2f3640;
        height: 25px;
        border-radius: 40px;
        padding: 5px;
        margin-top:9px;
        
  
}

.search-box:hover > .search-text{
  width: 240px;
  padding: 0 6px;
}

.search-box:hover > .search-btn{
  background: white;
  color: black;
  
}

.search-btn {
  color: #e84118;
  float: right;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #2f3640;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  cursor: pointer;
  text-decoration: none;
  
}
.search-btn > i {
  font-size: 30px;
}

.search-text {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  margin-top:2px;
  color: white;
  font-size: 16px;
  font-weight: normal;
  transition: 0.4s;
  line-height: 20px;
  width: 0px;
}

.profilebutton{
    
    padding-left:20px;
    padding-top:8px;

    button{
        outline:none;
        border:none;
        background:none;
        font-size:15px;
        font-weight:500;
        color:white;
    }
    img{
        height:37px;
        width:37px;
        border-radius:5px;
    }
    
    
}
.dropdown-ul{
    position: absolute;
    display:none;
    top:40px;
    border-radius:5px;
    
    padding:13px 35px 8px 35px;
    ;
    right:10px;
    background-color:rgba(0,0,0,0.8);

    a{
        text-decoration:none;
        color:white;
        font-size:17px;
        font-weight:bold;
        
        
        
    }
    
    
    
}
.show-dropdown{
    display:inline;
}
.dropdown-ul li{
    list-style:none;
    padding-bottom:8px;
    font-size:14px;
    font-weight:500;
    cursor: pointer;
}
#dropdown-icon{
    padding-bottom:7px; 
    font-size:17px;
}



    
`



function Header() {

    const movieSelector = useSelector(state => state.movieDetails)
    const seriesSelector = useSelector(state => state.seriesDetails)
    
    const dispatch = useDispatch()
    

    const {movieDetails} = movieSelector

    const {loading,seriesDetails} = seriesSelector

    useEffect(() => {
        dispatch(seriesAction())
        dispatch(movieAction())
        
    }, [dispatch])

    
    
    
   

    

    


    const [searchValue, setSearchValue] = useState('')
    const [searchModel, setSearchModel] = useState(false)

    const [scrolled, setscrolled] = useState('')

    

    const userLogin = useSelector(state=> state.login)
    
    
    

    const {userInfo} = userLogin
    
    useEffect(() => {
        window.addEventListener("scroll",function(){
            if(window.pageYOffset>1){
                
                setscrolled(window.pageYOffset)
        
            }
        })
    }, [(window.pageYOffset)])
    

    window.addEventListener('load', (event) => {
        const DropDown = document.querySelector('.dropdown-ul')
      });

    
    
   
     
    

    const dropdownHandler = ()=>{
        const DropDown = document.querySelector('.dropdown-ul')
        DropDown.classList.toggle('show-dropdown')
    }
    const logoutHandler =()=>{
        dispatch(logout)
        
    }


    return (
        <MainHeader scrolled={scrolled} >
            <LogoContainer onClick={()=>setSearchModel(false)}> 
                <Link to=''> <img src={Logo} alt="Nexus Video" />  </Link>
            </LogoContainer>
            <HeaderLinks onClick={()=>setSearchModel(false)} >
                <ul>
                    <li> <Link to='/'>Home</Link> </li>
                    <li><Link to='/Movie'>Movies</Link></li>
                    <li><Link to='/Series'>Series</Link></li>
                    <li><Link to='/newpopular'>New & Popular</Link></li>
                </ul>
            </HeaderLinks>
            <UserSerach>
            <div  className = 'search-box'>
                    <input onChange={(e)=>{return setSearchValue(e.currentTarget.value), setSearchModel(true)}} className = "search-text" type="search" placeholder = "Title, Action, Fantasy "/>
                    <a  className = "search-btn">
                    <GrSearch />
                    </a>
            </div>
            <div onClick={()=>setSearchModel(false)} className='profilebutton'>
                <button  onClick={dropdownHandler} ><img src="https://occ-0-3213-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZ2mdn_92ruEqx0QzXDv947nXRyeamVpcKT4xbR6N-51JGWihqgKLLIX9gO_E319FW3Qoqff4ujjappyQ8uskyFS6Q.png?r=a41" alt="profileplaceholder" /><IoMdArrowDropdown id='dropdown-icon' /></button>
                <ul className='dropdown-ul'>
                    <li><Link to='profile'>{userInfo?userInfo.first_name:'Account'}</Link></li>
                    <li>Account</li>
                    <li><div onClick={logoutHandler}>Logout</div></li>
                    <li>Help Centre</li>
                </ul>
            </div>

            </UserSerach>
            

            <ReactModal ariaHideApp={false} isOpen={searchModel}  onRequestClose={()=>setSearchModel(false)} 
                style={{
                    overlay: {
                      position: 'fixed',
                      top: '50px',
                      left: '0',
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      zIndex:20,
                      
                      

                    },
                    content: {
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      paddingLeft:'8vw',
                      
                      background: 'black',
                      overflow: 'hidden',
                      WebkitOverflowScrolling: 'none',
                      
                      
                      
                      outline: 'none',
                      border:'none',
                      padding: '20px 0px 20px 20px',
                      zIndex:20,
                    }
                  }}
            
            >       
            <div onClick={()=>setSearchModel(false)}>

                 {loading?<h2>LOading</h2>:movieDetails&&movieDetails.filter(item=>item.genres.toLowerCase().includes(searchValue.toLowerCase())).map((item)=> <ThumnailBox  key={item.id} item={item}     />)}                 
                 {loading?<h2>LOading</h2>:seriesDetails&&seriesDetails.filter(item=>item.genres.toLowerCase().includes(searchValue.toLowerCase())).map((item)=> <ThumnailBox key={item.id} item={item}/>)}                 
                 {loading?<h2>LOading</h2>:movieDetails&&movieDetails.filter(item=>item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item)=> <ThumnailBox key={item.id} item={item}/>)}                 
                 {loading?<h2>LOading</h2>:seriesDetails&&seriesDetails.filter(item=>item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item)=> <ThumnailBox key={item.id} item={item}/>)}                 

            </div>

                
                 
            </ReactModal>
            
        </MainHeader>
        
    )
}

export default Header
