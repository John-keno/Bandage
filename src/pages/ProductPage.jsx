import { useParams } from "react-router-dom";
import Products from "../components/products/Products";
import ProductDetails from "../components/product-details/ProductDetails";

export default function ProductPage() {
  const { productId } = useParams();
  return (
    <>
      <header>ProductPage {}</header>
      <section className="sectionPdDetails">
        <ProductDetails id={productId} />
      </section>
      <Products style={{ textAlign: "left" }} hideDefaults />
    </>
  );
}
