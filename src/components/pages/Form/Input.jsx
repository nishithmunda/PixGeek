import React from 'react'
import './Input.css'

const STYLE=['inp--primary','inp--outline'];
const SIZES=['inp--medium','inp--large'];


const Input=(
{inputStyle,
onChange,
inputSize,
type}
)=>{

const checkinputStyle=STYLE.includes(inputStyle)? inputStyle :STYLE[0]

const checkinputSize=SIZES.includes(inputSize)?inputSize :SIZES[0]

return(
    <input placeholder='' className={`inp ${checkinputSize} ${checkinputStyle}`}
           onChange={onChange}
           type={type}>
        
    </input>
)
}
export default Input;