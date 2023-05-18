import React from 'react'
import first from '../Images/first.png'
import fone from '../Images/fone.png';
import ftwo from '../Images/ftwo.png'
import fthird from '../Images/fthird.png'
import ffour from '../Images/ffour.png'
import Second from './Second';
import Third from './Third';
import Footer from './Footer'
import Form from './Form';






export default function Home() {
  return (
    <>
    
      <div className="grid1">
      <img  className='im1' width="170px" height="60px" src={fone} alt=""/>
      <h3>Take your graphics protection<br/> to the next level with DOL<br/> Max overlaminates</h3>
      <p className='para-1'>Pair with MPI 1105 wrapping film<br/> for ramped up protection</p>
      
      <div className='main'>
      <div className='o'><img  className='o-1' width="40px" height="40px"  src={ftwo} alt=""/><p className='p'>Maximum<br/> Durability</p></div>
      <div className='on'><img  className='on-2' width="40px" height="40px" src={fthird} alt=""/><p className='p'>Enhanced <br/>Appearance</p></div>
      <div className='one'><img  className='one-3' width="40px" height="40px"  src={ffour} alt=""/><p className='p1'>High Glass</p></div>
      </div>
      
      </div>
      <img  className='back-img' width="100%" height="800px" src={first} alt=""/>

      <div className='Sec'>
        <Second/>
        <Third/>
        <Footer/>
        <Form/>
      </div>









     
     
    
  

 
  
 
    </>
  )
  
}
