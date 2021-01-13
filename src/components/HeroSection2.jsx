import React from 'react'
import {Link} from 'react-router-dom'
import './HeroSection2.css'
import Button from './Button'



function HeroSection2(){
    return(
    // <div className='hero-container'>
    //         <video src="/videos/game-1.mp4" autoplay loop muted/>
    //         <h1>GET STARTED</h1>
        
    //     <div className='hero-btns'>
    //         <Link to='/signup'>
    //             <Button className='btns' uttonStyle='outline' buttonSize='btn--large'> CHOOSE WEAPON</Button>
    //         </Link>
    //     </div>
    // </div>
   
        <div className='hero-container'>
            <video src="/videos/camera .mp4" autoPlay loop muted/>
            <h1>WORLD BEHIND LENS.</h1> 
            <div className='hero-btns'>
                <Link className='getstartedlink'to='/signup'>
                {/* <Button className='btns' buttonStyle='.btn--delux--outline'
                buttonSize='btn--large'>
                    
                    GET STARTED
                    
                </Button> */}
                </Link>
                
                {/* <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    WATCH <i className='far fa-play-circle'/>
                </Button> */}

            </div>
        </div>
    )
}
export default HeroSection2