import AboutUs from "./AboutUs";
import Hero from "./Hero";
import Projects from "./Projects";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return ( 
    <div>
      <Hero/>
      <AboutUs/>
      <Projects/>
      <Services/>
      <Testimonials/>
    </div>
   );
}
 
export default Home;