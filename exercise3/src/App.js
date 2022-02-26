import './App.css';
import Title from './components/Title';
import ProductList from './components/ProductList';
import Search from './components/Search';
import {useState} from 'react';
import productsJson from "./localProducts-json/productsJson";
  

  function App() {
   

   

    const [products] = useState(productsJson);
   

    const {search} = window.location;
const query = new URLSearchParams(search).get('s');

const filterProducts = (products, query) => {
  if (!query) {
    return products;
  }
  return products.filter((product) => {
    const productName = product.name.toLowerCase();
    return productName.includes(query);
  });
};




const filteredProducts = filterProducts(products, query);

  return (
    <div className="App">
      <Title />
      <Search />
      <div className="productContainer">
      {filteredProducts.map(product => (
        <ProductList key ={product.key} name={product.name} image={product.image} price={product.price}/>
      ))}
      </div>
      
    </div>
  );
}

export default App;