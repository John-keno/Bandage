import { Link, useParams } from "react-router-dom";
import Products from "../components/products/Products";
import ProductDetails from "../components/product-details/ProductDetails";
import { ChevronRight } from "../icons/icons";

export default function ProductPage() {
  const { productId } = useParams();
  return (
    <>
      <header className='pdheader'>
        <div className="pdheadercontainer">
          <nav><ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
              <div style={{color: 'var(--light-gray)'}}><ChevronRight/></div>
            <li >
              <Link to='/' style={{color: 'var(--light-gray)'}}>shop</Link>
            </li>
            </ul></nav>
        </div>
      </header>
      <section className="sectionPdDetails">
        <ProductDetails id={productId} />
      </section>
      <Products style={{ textAlign: "left" }} hideDefaults />
    </>
  );
}
