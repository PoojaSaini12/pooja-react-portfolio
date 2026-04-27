import { useState } from "react";

function Modal(){
    let [showmodal,setShowmodal]= useState(false)
    return(
        <div>
        <div onClick={()=>setShowmodal(false)} className={`Modal-overlay ${showmodal ? 'Show_Modal-overlay' : '' }`}></div>
        <div className={`modal ${showmodal ? 'ShowModal' : ''}`}>asa   <span onClick={()=>setShowmodal(false)} className="text-right">close</span></div>
        <button onClick={()=>setShowmodal(!showmodal)} className="modal-btn">Open Modal</button>
        </div>
    )

}


export default Modal;