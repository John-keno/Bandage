import { useGetProductsQuery } from "../../features/service/dummyData";
import Button from "../ui/Button";
import ProductItems from "./ProductItems";
import styles from "./products.module.css";
export default function Products() {
  const { data, isError, isLoading } = useGetProductsQuery();
  console.log("response: ", data);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>Featured Products</h4>
        <h3>BESTSELLER PRODUCTS</h3>
        <p>Problems trying to resolve the conflict between</p>
      </div>
      <div className={styles.productCard}>
        {data?.products.map((product) => (
          <ProductItems key={product.id} product={product}/>
        ))}
      </div>
      <div className={styles.btnDiv}>
        <Button className={styles.btnMD}>Load More Products</Button>
      </div>
    </div>
  );
}
