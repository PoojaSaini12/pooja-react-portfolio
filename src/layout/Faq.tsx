import { useState } from "react";
import { faqItems } from "../data/faq";

function Faq(){
    let [showAns,setshowAns] = useState(faqItems[0].id)
    return(
        <div className="faq">
           <h2>Frequently Asked Questions with States</h2>
           {faqItems.map((faqItems,i)=>{
            return(
                <div className="faqOuter" key={i}>
                <h3 onClick={()=>setshowAns(faqItems.id)}>{faqItems.ques}</h3>
                <div className={`faqAns ${showAns==faqItems.id ? 'activeAns' : ''}`}>
                    {faqItems.ans}
                </div>
            </div>
            )
           }

           )}
        

        </div>
    )
}

export default Faq;
