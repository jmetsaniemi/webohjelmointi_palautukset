import React from 'react';

export default function ReadItems(props) {
  
  
  return <div className='ListDisGood'>

<ul className='rivit'>
      <div className='itselista'>

        {props.Items.map( (item, index) => {

          return <li className='insides' key={index}> {item.qty} {item.name} </li>
        })
        }
      
      
      </div>

      </ul>

  </div>
  
  ;
}
