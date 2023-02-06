import './App.css';
import ProductCard from './components/ProductCard';
import data from './products.json'




function App() {

  return (
    <div className="App">
      {data.map((product) => 
        <ProductCard key={product.prodid} name={product.title} cat={product.category} price={product.price}/>
      )}
    </div>
  );
}

export default App;
