import { useState } from 'react';
import './navbar.css'
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function NavbarApp({children}) {
  console.log(children)

  let template=''
  let [count,setCount] = useState(1)
   let[pshow,setPshow] = useState(false)

   let[status,setStatus] = useState(false)

   let[pstatus,setPstatus] = useState(false)

   

   if (pshow){
    template=
    <>
    <button onClick={()=>setPshow(!pshow)} className='bg-[white] p-3'>hide</button>
    <p>welcome to pghgs</p>
    </>
    
    
   }

   else{
    template=<button onClick={()=>setPshow(!pshow)} className='bg-[white] p-3'>Show</button>
   }


  let contactUs=()=>{
    setCount(count+1)
  }

  return (
    <nav className="text container mx-auto px-6 flex items-center justify-between">
      <Link className="text-xl font-bold tracking-tight hover:text-primary" to={'/'}>PS</Link>
      <div className="flex items-center gap-1">
        <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
          <Link to={'/'}>Home</Link>
          <Link to={'/about-me'}>About Me</Link>
          <Link to={'/experience'}>Experience</Link>
          <Link to={'/projects'}>Projects</Link>
          <Link to={'/services'}>Services</Link>
          <Link to={'/appdemo'}>Appdemo</Link>
          <Link to={'/blog'}>Blog</Link>
        </div>
        {children}
      </div>
      <div className="d-block w-100">
        <button onClick={contactUs}>Contact Me</button>
        {count}
        <div>{template}</div>
        <button onClick={()=>setStatus(!status)} className='bg-[green] p-2'>
          
          {
            (status) ? 'Hide' : 'Show'
          }
          
          
          </button>
          {(status) 
          ?
          <div className='bg-[blue]'>bg-blue</div> 
          :
          ''
         }

         <div>

          <input className='bg-[white]' type={pstatus ? 'text' : 'password'}    />
          <button onClick={()=>setPstatus(!pstatus)} className='bg-[blue]'>{pstatus ? 'Hide Password' : 'Show Password'}</button>
         </div>
         
         

      </div>
     
    </nav>
  )
}

export default NavbarApp
