import './App.css';
import { BsArrowUp } from 'react-icons/bs';
import NavBar from './NavBar/NavBar'
import Front from './Front/Front'
import Footer from './Footer/Footer'
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import About from './About/About';
import Certificates from './Certificates/Certificates';
function App() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="App">
      <div onClick={()=>{topFunction()}} className='azad'>
        <BsArrowUp className='iconArrow' />
      </div>
      <NavBar />
      <Front />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
