import './App.css';
import React, { useState } from 'react';
import ReadItems from  './components/ReadItems';
import Buttons from './components/Buttons';
import Mainheader from './components/Mainheader';

function App() {

const [listItems, setlistItems] = useState([

  {
    id:1,
    qty:0,
    name: "Herneet"
  },
  {
    id:2,
    qty:0,
    name: "Siika"
  },
  {
    id:3,
    qty:0,
    name: "Nappi"
  },
  {
    id:4,
    qty:0,
    name: "Konduktööri"
  }

]);

const AddToTheList = (idcheck) => {

  var randomNumber = Math.floor(Math.random() *10) +1;

  let uusilistItems = [...listItems];

  let itemClickedIndex = uusilistItems.findIndex(i => idcheck === i.id);
  if (itemClickedIndex != -1){
    let uusiElement = {...uusilistItems[itemClickedIndex]}
    uusiElement.qty = uusiElement.qty + randomNumber;
    uusilistItems[itemClickedIndex] = uusiElement;

    setlistItems(uusilistItems);
  }

}




  return (
    <div className="App">
      <Mainheader/>
      <ReadItems Items={listItems} />
      <Buttons paina = { AddToTheList }/>

      
    </div>
  );
}

export default App;
