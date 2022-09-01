import "./styles.css";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { Navbar } from "./components/Navbar/Navbar";
import { Filter } from "./components/Filter/Filter";
import { useProducts } from "./context/productContext";

export default function App() {
  const { productList } = useProducts();
  return (
    <div className="App">
      <Navbar />
      <div className="productPage">
        <Filter />
        <div className="productList">
          {productList.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
