import React from 'react'
import third from '../Images/third.png'
import lthird from '../Images/lthird.svg'
import lone from '../Images/lone.png'
import ltwo from '../Images/ltwo.png'
import lfour from '../Images/lfour.png'
import { BsArrowRight } from "react-icons/bs";

const Third = () => {
  return (
    <>
    <div className='box'>
    <img  className='third' width="40%" height="650px" src={third} alt=""/>
    <div className='box1'>
     <h2>Why us?</h2>
    
    <div className='box2'>
      <div className='b-img'>
      <div className='imges'>
         <img  className='third1' width="30px" height="37px" src={lone} alt=""/>
      </div>
      <div className='imges'>
         <img  className='third1' width="30px" height="37px" src={ltwo} alt=""/>
      </div>
      <div className='imges'>
         <img  className='third1' width="30px" height="37px"  src={lthird} alt=""/>
      </div>
      <div className='imges'>
         <img  className='third1' width="30px" height="37px" src={lfour} alt=""/>
      </div>
      </div>
        
     
      <div className='text'>
          <b>Quality Products</b><br/><p> Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</p>
          <b>Multiple Options</b><br/><p>We offer DOL Max in a 2.1 mil gloss finish and 1.3 mil optically clear, gloss finish. This allows you to choose the perfect film thickness level for your specific application, ensuring your graphics look the best and stand out from the competition</p> 
          <b>Expertise and Support</b><br/><p>Our team of experts are available to provide guidance and support throughout the entire process, from selecting the right product for your needs to installation and beyond.</p><b>Durability Assurance</b><br/><p>Trust our products with confidence, as we offer industry leading durability assurance for our overlaminate films.</p>
          <button className='btn1'>Request a call back <BsArrowRight/></button>
      </div>
      
      </div>
     </div>
    </div>
    
    </>
  )
}

export default Third