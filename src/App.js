import './App.css';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Home from './components/Home';
import Navigationbar from './components/Navigationbar';
import Projects from './components/Projects';
import Services from './components/Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    	<Router>
        <Navigationbar/>
        {/* <Header/> */}
        <main>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about-us' element={<AboutUs/>}/>
            <Route path='/projects' element={ <Projects/>}/>
            <Route path='/services' element={ <Services/>}/>
          </Routes>
        </main>
      </Router>
  );
}

export default App;
