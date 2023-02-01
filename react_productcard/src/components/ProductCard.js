import ProductCategory from "./ProductCategory";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";

export default function ProductCard({name, price, cat}){
    return (
      <article className="product-card">
        <ProductTitle productname={name}/>
        <ProductPrice price={price}/>
        <ProductCategory cat={cat} />
        <button>Legg til i handlekurv</button>
      </article>
    )
  
  }