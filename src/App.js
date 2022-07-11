import './App.css';
import Cover from './components/CoverPage/Cover';
import Home from './components/Home/Home';
import {Routes, Route, Navigate} from 'react-router-dom';
import Movies from './components/Home/Movies/Movies';
import MovieDetails from './components/Home/Movies/MovieDetails';
import Navbar from './components/Home/Navbar/Navbar';
import Login from './components/CoverPage/Login';
import Tv from './components/Home/Tv/Tv';
import TvDetails from './components/Home/Tv/TVDetails';
import People from './components/Home/People/People';
import PeopleDetails from './components/Home/People/PeopleDetails';
function App() {
  
  function ProtectedRoute({children})
  {
    if(JSON.parse(localStorage.getItem('userLoginData'))===null)
    {
     return <Navigate to='/cover'/>
    }
    else
    {
      return children;
    }
  }
  return (
    <>
      <Login/>
      <Routes>
        <Route path='/' element={<Cover/>}/>
        <Route path='cover' element={<Cover/>}/>
        <Route path='home' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path='movies' element={<ProtectedRoute><Movies/></ProtectedRoute>}/>
        <Route path='movieDetails' element={<ProtectedRoute><MovieDetails/></ProtectedRoute>}>
          <Route path=':id' element={<MovieDetails/>}/>
        </Route>
        <Route path='tvs' element={<ProtectedRoute><Tv/></ProtectedRoute>}/>
        <Route path='tvDetails' element={<ProtectedRoute><TvDetails/></ProtectedRoute>}>
          <Route path=':id' element={<MovieDetails/>}/>
        </Route>
        <Route path='people' element={<ProtectedRoute><People/></ProtectedRoute>}/>
        <Route path='tvDetails' element={<ProtectedRoute><PeopleDetails/></ProtectedRoute>}>
          <Route path=':id' element={<MovieDetails/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
