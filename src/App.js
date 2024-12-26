import logo from './logo.svg';
import './App.css';
import MainComponents from './NavigationBar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contacts from './Pages/Contacts/Contacts';
import About from './Pages/About/About';
import NavBar from './NavigationBar/NavBar';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Routes className="Route-div">
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contacts/>}/>
      </Routes> */}
      <Home/>
      <About/>
      <Projects/>
      <Contacts/>
      

    </div>
  );
}

export default App;
