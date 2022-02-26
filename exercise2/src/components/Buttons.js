import React from 'react';

export default function Buttons(props) {
  return <div className='napit'>

    <button onClick={ () => props.paina(1)}>Lisää herneitä </button>
    <button onClick={ () => props.paina(2)}>Lisää Siika </button>
    <button onClick={ () => props.paina(3)}>Lisää Nappeja </button>
    <button onClick={ () => props.paina(4)}>Lisää Konduktööri </button>

  </div>;
}
