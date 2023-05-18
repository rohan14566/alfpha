import React from 'react'
import foone from '../Images/foone.png'

const Footer = () => {
  return (
    <>
    <div className='fmain'>
<div className='f-1'>
  <h6>Best solutions from</h6>
  <img  className='f-img' width="150px" height="60px" src={foone} alt=""/>
</div>
<div className='f-2'>
<p>DOL Max Overlaminate Films<br/>Why us<br/>
Enquire now</p>
</div>
<div className='f-3'>
<p>Avery Dennison Overlaminate <br/> Avery Dennison Overlaminate Films<br/> Avery Dennison Digital Overlaminate Films<br/> Avery Dennison DOL Max</p>
</div>
<div className='f-4'>
<p>Overlaminate<br/> Overlaminate Films <br/>Digital Overlaminate Films</p>
</div>

    </div>
    </>
  )
}

export default Footer