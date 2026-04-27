import React, { useState } from 'react'
import { tabsdata } from '../data/tabsdata'

export default function Tabs() {
    let [activeTab, setactiveTab] = useState(0)
    let [activeContent, setactiveContent] = useState(tabsdata[0])


    let changeData = (i) =>{
        return(
            setactiveTab(i),
            setactiveContent(tabsdata[i])
        )
    }

  return (
    <div className='conatiner tabs'>
        <h2>Tabbings</h2>
        
        <ul>

            {tabsdata.map((tabTitle,i) => {
                return(
                   <li key={i}>
                 <button onClick={() => changeData(i)} className={activeTab==i ? 'activeButton' : ''}>{tabTitle.title}</button>
            </li> 
                )
            })}

            
            
        </ul>
        
        <p>
            {activeContent.description}
        </p>
        
        </div>
  )
}
