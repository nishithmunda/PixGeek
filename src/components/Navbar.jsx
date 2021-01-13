import React, { useEffect, useState } from 'react'
import{Link} from 'react-router-dom'
import {FaTimes,FaBars,FaCameraRetro} from 'react-icons/fa'
import {GiMicroscopeLens} from 'react-icons/gi'
import { SiGoogle} from "react-icons/si";
import Button from './Button'
import './Navbar.css'


const Navbar=()=>{
    const [click,setClick]=useState(false)
    const [button,setButton]=useState(true)

    const handleClick=()=> {setClick(!click)}
    const closeMobileMenu=()=>{setClick(false)}

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false)
        }
        else{
            setButton(true) 
        }
    }
    useEffect(()=>{
        showButton();
    },[])

    window.addEventListener('resize',showButton);

  return(
      <div>
          <div className='navbar'>
             <div className='navbar-container container'>
                 <Link to='/' className='navbar-logo'onClick={closeMobileMenu}>
                  <GiMicroscopeLens className='navbar-icon'/>
                  <div className='name'>
                   <div>pix</div>
                   <div className='endname'>G</div>
                   eek
                   </div>
                 </Link>
                 <div className='menu-icon' onClick={handleClick}>
                  {click ? <FaTimes/>:<FaBars/>}
                 </div>
                 <ul className={click? 'nav-menu active':'nav-menu'}>
                      <li className='nav-item'>
                          <Link to='/' className='nav-links'onClick={closeMobileMenu}>HOME</Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='/services' className='nav-links'onClick={closeMobileMenu}>SERVICES</Link>
                      </li>
                      <li className='nav-item'>
                          <Link to='/products' className='nav-links'onClick={closeMobileMenu}>PRODUCTS</Link>
                      </li>
                      <li className='nav-btn'>
                          {button ? (
                            <Link to='/sign-up'className='btn-link'>
                                <Button buttonStyle='btn--delux--outline'>JOIN+</Button>
                            </Link>  
                          ):(
                            <Link to='/sign-up'className='btn-link'>
                               <Button buttonStyle='btn--outline'buttonSize='btn--mobile' onClick={closeMobileMenu}>JOIN+</Button>
                            </Link> 
                          )}
                      </li>
                 </ul>
              </div>   
          </div>
      </div>
  )
}
export default Navbar