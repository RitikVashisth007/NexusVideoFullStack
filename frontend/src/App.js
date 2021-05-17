import {useSelector} from 'react-redux'


import './App.css';
import {Redirect, Route,Switch} from 'react-router-dom'
import Login from './Pages/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './Pages/Register';
import HomePage from './Pages/HomePage';
import Profile from './Pages/Profile';
import DetailScreen from './Pages/DetailScreen';
import SeriesPage from './Pages/SeriesPage';
import MoviePage from './Pages/MoviePage';
import Lost from './components/Lost';
import NewPopular from './Pages/NewPopular';





function App() {

  const userLogin = useSelector(state=> state.login)

  const {userInfo} = userLogin



  return ( 
    <div className="App">
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      
       
      {userInfo&&<Header/>}
      <Switch>
      
        {userInfo?<Route path='/' exact component={HomePage} />:<Redirect to='/login' />}
        
        {userInfo?<Route path='/profile' exact component={Profile} />:<Redirect to='/register' />}
        {userInfo?<Route path='/detail:id?'   component={DetailScreen} />:<Redirect to='/register' />}
        {userInfo?<Route path='/series' exact component={SeriesPage} />:<Redirect to='/register' />}
        {userInfo?<Route path='/movie' exact component={MoviePage} />:<Redirect to='/register' />}
        {userInfo?<Route path='/newpopular' exact component={NewPopular} />:<Redirect to='/register' />}
        <Route  component={Lost} />
        
          
        
      </Switch> 
      
      {userInfo&&<Footer/>}

    </div>
      
  );
} 

export default App;
