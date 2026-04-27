import './App.css'
import Header from './layout/Header';
import About from './Sections/About';
import Hero from './Sections/Hero';
import Experience from './Sections/Experience';
import Projects from './Sections/Projects';
import Contact from './Sections/Contact';
import Testimonials from './Sections/Testimonials';

function App() {

  return (
    <>
    <div className="min-h-screen overflow-x-hidden">
      <Header/>
      <main>
          <Hero/>
          <About/>
          <Projects/>
          <Experience/>
          <Testimonials/>
          <Contact/>
      </main>
    </div>
    
    </>
  )
}

export default App;


