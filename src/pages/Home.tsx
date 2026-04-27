import React from 'react'
import Navbar from '../layout/Navbar'
import Header from '../layout/Header'
import HeroBg from '../images/hero-bg.jpg'


export default function Home() {
  return (
    <>
      <Header />

      <main>
        <section className='relative min-h-screen flex items-center overflow-hidden'>
          <div className='absolute inset-0'>
            <img alt="Hero image" className="w-full h-full object-cover opacity-40" src={HeroBg} />
          </div>
          <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background'></div>

          {/* Green Dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
              <div
                className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                style={{
                  backgroundColor: "#20B2A6",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `slow-drift ${15 + Math.random() * 20
                    }s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>


        </section>
      </main>
    </>

  )
}
