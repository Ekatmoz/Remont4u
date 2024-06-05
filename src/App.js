import './App.css';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Navigationbar from './components/Navigationbar';
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Testimonials from './components/Testimonials';

function App() {
  return (
    	<Router>
        <Navigationbar/>
          <main>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about-us' element={<AboutUs/>}/>
              <Route path='/projects' element={ <Projects/>}/>
              <Route path='/testimonials' element={ <Testimonials/>}/>
              <Route path='/gallery' element={ <Gallery/>}/>
            </Routes>
          </main>
        <Footer/>
      </Router>
  );
}

export default App;
