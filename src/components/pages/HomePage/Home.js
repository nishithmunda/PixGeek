import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data'
import Pricing from '../../Pricing'
import HeroSection2 from '../../HeroSection2'


function Home(){
  return(
      <div>
          
          <HeroSection2/>
          <HeroSection {...homeObjTwo}/> 
          <HeroSection {...homeObjOne}/>
          <HeroSection {...homeObjThree}/>  
        
          
          
          {/* <Pricing/> */}
      </div>
  )
}
export default Home