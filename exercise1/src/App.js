import './App.css';
import MainContainer from './FlexboxElements/MainContainer';
import NewContainer from './FlexboxElements/NewContainer';
import NewsContainer from './FlexboxElements/NewContainer';

function App() {

  const SubHeaders =[
    'Etusivu ',
    'HS Visio ',
    'Luetuimmat ',
    'Uusimmat ',
    'Politiikka ',
    'Kaupunki ',
    'Kulttuuri ',
    'Tiede ',
    'Hyvinvointi ',
    'Ruoka ',
    'NYT'
  ];

  const MainHeaders =[
  
  ];


  return (
    <div className="App">

      

      <MainContainer mainHeaders = {MainHeaders}/>

      <NewContainer subHeaders = {SubHeaders}/>
      

     
      
      
      

    </div>
  );
}

export default App;
