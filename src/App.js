import './App.css';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <AboutUs/>
      <Projects/>
      <Services/>
    </div>
  );
}

export default App;
