import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Footer from './layout/Footer'
import ProductItems from './layout/ProductItems'

import './App.css'
import { blog } from './data/blog'
import mypic from './images/mypic.jpeg'
import SideMenu from './layout/SideMenu'
import Modal from './layout/Modal'
import Faq from './layout/Faq'
import FaqProps from './layout/FaqProps'
import Looping from './layout/Looping'
import Tabs from './layout/Tabs'
import NavbarApp from './layout/NavbarAPP'
import Todo from './demoPages/todo'

function Appdemo() {

  return (
    <>
    <header className='py-5'>
         <NavbarApp>
          <h2>I am Navbars children</h2>
         </NavbarApp>

         <SideMenu/>
         <Modal/>
         <Faq/>
         
         <Tabs/>

         <Todo/>


  
         
         <Looping/>
      

         <div className='container mx-auto px-6'>




          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            { blog.map ((v,i) => {
              return(
                <ProductItems pitems={v} key={i} />
              )
            })}
          </div>
            
         </div>

         

     
    </header>
  
     
      <section id="center">
        <h1>Hello Pooja 👋</h1>
        <img width={200} src={mypic}></img>
      </section>
      <Footer />
    </>
  )
}

export default Appdemo;



