import './App.css';
import ProductCard from './components/ProductCard';
import products from './products.json'




function App() {

  return (
    <div className="App">
      {products.map((product) => 
        <ProductCard key={product.prodid} name={product.title} cat={product.category} price={product.price}/>
      )}
    </div>
  );
}

export default App;
