import { useParams } from "react-router-dom";
import Products from "../components/products/Products";

export default function ProductPage() {
  const { productId } = useParams();
  return (
    <>
      <header>ProductPage {productId}</header>
      <Products/>
    </>
  );
}
