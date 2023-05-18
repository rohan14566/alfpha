import React from 'react'
import second from '../Images/second.png'

import { BsArrowRight } from "react-icons/bs";


const Second = () => {
  return (
    <>
    
      <div className="table">
        <img  className='second' width="100%" height="700px" src={second} alt=""/>

        <div className='table1-2'>
           <h2>DOL Max Overlaminate Films</h2>
           <p>Printed graphics deserve maximum protection, DOL Max is the solution.</p>
           <b>Features & Benefits:</b>
           <ul type='disc'>
            <li>Premium vertical durability of up to 7 years and up to 2 years horizontal<br/> durability protection.</li>
            <br/>
            <li>Premium vertical durability of up to 7 years and up to 2 years horizontal<br/> durability protection.</li>
            <br/>
            <li>Premium vertical durability of up to 7 years and up to 2 years horizontal<br/> durability protection.</li>
           </ul>
           <button className='btn'><b>Inquire now <BsArrowRight/></b></button>
        </div>

        
        
        
      

    
      </div>
     









     
     
    
  

 
  
 
    </>
  )
}

export default Second