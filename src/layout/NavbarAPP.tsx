import { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function NavbarApp({ children }) {

  const [count, setCount] = useState(1);
  const [pshow, setPshow] = useState(false);
  const [status, setStatus] = useState(false);
  const [pstatus, setPstatus] = useState(false);

  // Toggle template UI
  let template = null;

  if (pshow) {
    template = (
      <>
        <button 
          onClick={() => setPshow(false)} 
          className="bg-white p-3"
        >
          Hide
        </button>
        <p>welcome to pghgs</p>
      </>
    );
  } else {
    template = (
      <button 
        onClick={() => setPshow(true)} 
        className="bg-white p-3"
      >
        Show
      </button>
    );
  }

  // Safe state update
  const contactUs = () => {
    setCount(prev => prev + 1);
  };

  return (
    <nav className="container mx-auto px-6 flex items-center justify-between">
      
      <Link 
        className="text-xl font-bold tracking-tight hover:text-blue-500" 
        to="/"
      >
        PS
      </Link>

      <div className="flex items-center gap-2">
        <div className="rounded-full px-3 py-1 flex items-center gap-2 bg-gray-100">
          <Link to="/">Home</Link>
          <Link to="/about-me">About Me</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/appdemo">Appdemo</Link>
          <Link to="/blog">Blog</Link>
        </div>

        {children}
      </div>

      <div className="block w-full mt-4">

        <button 
          onClick={contactUs} 
          className="bg-green-500 text-white px-3 py-1"
        >
          Contact Me
        </button>

        <span className="ml-2">{count}</span>

        <div className="mt-2">{template}</div>

        <button 
          onClick={() => setStatus(!status)} 
          className="bg-green-500 text-white p-2 mt-2"
        >
          {status ? 'Hide' : 'Show'}
        </button>

        {status && (
          <div className="bg-blue-500 text-white p-2 mt-2">
            bg-blue
          </div>
        )}

        <div className="mt-3">
          <input 
            className="bg-white border px-2 py-1"
            type={pstatus ? 'text' : 'password'}
          />
          <button 
            onClick={() => setPstatus(!pstatus)} 
            className="bg-blue-500 text-white ml-2 px-2 py-1"
          >
            {pstatus ? 'Hide Password' : 'Show Password'}
          </button>
        </div>

      </div>
    </nav>
  );
}

export default NavbarApp;