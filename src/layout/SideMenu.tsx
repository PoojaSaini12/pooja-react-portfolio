
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
function SideMenu(){
    let[menushow,setMenushow] = useState(false)
    return(
        <div>
        <FontAwesomeIcon onClick={()=>setMenushow(!menushow)} icon= {(menushow ? faCircleXmark : faBars)}/>
        <ul className= {`SideMenu ${menushow ? 'active' : ''}`}>
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Contact us</li>
        </ul>
        </div>
    )
}


export default SideMenu