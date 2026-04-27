import React from 'react'
import { faqItems } from '../data/faq'

export default function FaqProps() {

  let items=faqItems.map((faqItems,i)=>{
    return(
      
      <div className="faqOuter" key={i}>

      <FaqItems />
       </div>
       
    )
    
  })
  return (
    <div>
    <div className="faq">
      <h2>Frequently Asked Questions with Prop drilling</h2>
      
        {items}

     
    </div>
    
    </div>
  )
}


function FaqItems() {
  return (
    <div>
      <h3>ghg</h3>
      <div className="faqAns">
        ghgh
      </div>
    </div>
  )
}


