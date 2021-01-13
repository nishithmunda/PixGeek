import React,{useState} from 'react'
import Input from './Input'
import Button from '../../Button'
import './Form.css'

function Login(){
  return(
      <div className='main'>
         <div><img src='' className='login__img'/></div> 
         <div className='form-content'>
        <form className='form'>
            <h2 className='title'> LOGIN </h2>
            <div className='form-input'>
               <label className='form-label' >EMAIL</label>
               <Input inputStyle='inp--primary' type='email'/>
            </div>
            <div className='form-input'>
               <label className='form-label'>PASSWORD</label>
               <Input inputStyle='inp--primary' type='password'/>
            </div>
            <div className='button-adjust'>
            <Button buttonSize='btn--medium' buttonStyle='btn--outline'>LOGIN</Button>
            </div>
        </form>
        </div>        
      </div>
  )
}
export default Login