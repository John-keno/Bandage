import { useState } from "react";
import { useGetProductsQuery } from "../../features/service/dummyData";
import Button from "../ui/Button";
import ProductItems from "./ProductItems";
import styles from "./products.module.css";
import { AnimatedLoading } from "../../icons/icons";
export default function Products() {
  const [moreProduct, setMoreProducts] = useState(10);
  const { data, isError, isLoading, isFetching, refetch } =
    useGetProductsQuery(moreProduct);
  // const [loadMoreProducts,] = useLazyGetProductsQuery();
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
          <ProductItems key={product.id} product={product} />
        ))}
      </div>
      {(isLoading || isFetching) && (
        <div className={styles.animatedLoading}>
          <AnimatedLoading />
        </div>
      )}
      {isError && (
        <div className={styles.animatedLoading}>
          <p>Unable to load products. Check internet connection</p>
          <p></p>
        </div>
      )}
      <div className={styles.btnDiv}>
        {moreProduct !== data?.total ? (
          <Button
            className={styles.btnMD}
            disabled={isLoading || isFetching}
            onClick={() => {
              if (isError) {
                refetch();
                return;
              }
              
              if (moreProduct + 30 > data?.total) {
                setMoreProducts(data?.total);
              } else {
                setMoreProducts(moreProduct + 30);
              }
            }}
          >
            {isError ? "Retry" : "Load More Products"}
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
