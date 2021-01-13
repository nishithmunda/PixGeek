import React from 'react'
import {Link} from 'react-router-dom'
import {FaFire} from 'react-icons/fa'
import Button from './Button'
import './Pricing.css'

function Pricing(){
   return (
   <div>
        <div className='pricing__section'>
            <div className='Pricing__wrapper'>
              <h1 className='Pricing__heading'>Pricing</h1>
              <div className='pricing__container'>
              <Link to ='/sign-up' className='pricing__container-card'>
                  <div className='pricing__container-cardInfo'>
                      <div className='icon'>
                           <FaFire/> 
                      </div>
                      <h3>Starter</h3>
                      <h4>$10</h4>
                      <p>PER MONTH</p>
                      <ul className='pricing__container-features'>
                         <li>
                             100 TRANSACTION
                         </li>
                         <li>
                             2% CASH BACK
                         </li>
                         <li>
                             $10,000 LIMIT
                         </li>
                      </ul>
                      <Button buttonSize='btn--wide' buttonColor='primary'>
                        CHOOSE PLAN
                      </Button>
                  </div>
              </Link>
              <Link to ='/sign-up' className='pricing__container-card'>
                  <div className='pricing__container-cardInfo'>
                      <div className='icon'>
                          <FaFire/>
                      </div>
                      <h3>Starter</h3>
                      <h4>$10</h4>
                      <p>PER MONTH</p>
                      <ul className='pricing__container-features'>
                         <li>
                             100 TRANSACTION
                         </li>
                         <li>
                             2% CASH BACK
                         </li>
                         <li>
                             $10,000 LIMIT
                         </li>
                      </ul>
                      <Button buttonSize='btn--wide' buttonColor='primary'>
                        CHOOSE PLAN
                      </Button>
                  </div>
              </Link>
              <Link to ='/sign-up' className='pricing__container-card'>
                  <div className='pricing__container-cardInfo'>
                      <div className='icon'>
                          <FaFire/>
                      </div>
                      <h3>Starter</h3>
                      <h4>$10</h4>
                      <p>PER MONTH</p>
                      <ul className='pricing__container-features'>
                         <li>
                             100 TRANSACTION
                         </li>
                         <li>
                             2% CASH BACK
                         </li>
                         <li>
                             $10,000 LIMIT
                         </li>
                      </ul>
                      <Button buttonSize='btn--wide' buttonColor='primary'>
                        CHOOSE PLAN
                      </Button>
                  </div>
              </Link>
            </div>
            </div>
        </div>
    </div>
    )
}
export default Pricing