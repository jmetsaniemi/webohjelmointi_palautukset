import React from 'react';


export default function ProductList(props) {

  
    return (
        
    
          <div className='productBox'>
            <div> {props.name} </div>
            <img src= {props.image}/>
            <div> {props.price} £</div>
          </div>);
  
}
