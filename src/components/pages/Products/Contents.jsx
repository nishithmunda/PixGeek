import React from 'react';
import product_data from './product_data'
import  "./Contents.css"; 

const Content=()=>{
    console.log(product_data);
    const listItems= product_data.map((item)=>
    <div className='card' key={item.id}>
        <div className='card_img'>
            <img src={item.thumb}/>
        </div>
        <div className='card_header'>
            <h2>{item.product_name}</h2>
            <p>{item.description}</p>
            <p className='price'>{item.price}<span>{item.currency}</span></p>
            <div className='btn'>
               Add to cart
            </div>
        </div>
    </div>
    );
    return(
        <div className='products'>
        <div className='main_content'>
             <h3>PRODUCTS</h3>
             {listItems}
        </div>
        </div>
    )
}
export default Content