// import './App.css';
import NavBar from './NavBar'
import Logo from './Logo'
import Main from './Page';
import Bollywood from './Bollywood';
import Hollywood from './Hollywood';
import Fitness from './Fitness';
import Food from './Food';
import Technology from './Technology';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Logo/>
    <NavBar/>
    <Routes>
    <Route exact path="/" element={<Main/>}/>
    <Route path="/Home" element={<Main/>}/>
    <Route path="/Bollywood" element={<Bollywood/>}/>
    <Route path="/Technology" element={<Technology/>}/>
    <Route path="/Hollywood" element={<Hollywood/>}/>
    <Route path="/Fitness" element={<Fitness/>}/>
    <Route path="/Food" element={<Food/>}/>
    <Route path="/*" element={<h2>ERROR 404! Page Not Found...</h2>}/>
    </Routes> 
    </>
  );
}

export default App;
