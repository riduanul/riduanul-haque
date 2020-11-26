import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import Blogs from './Components/Blogs/Blogs';
import Skill from './Components/Skill/Skill';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
      <Home />
      <AboutMe />
      <Skill />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
