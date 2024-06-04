import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import { useGetProductsQuery } from "../../features/apiSlice/dummyData";
import Button from "../ui/Button";
import ProductItems from "./ProductItems";
import styles from "./products.module.css";
import { AnimatedLoading } from "../../icons/icons";
import Container from "../ui/Container";
function Products(props) {
  const { showButton, hideDefaults, style } = props;
  const [showTitle, setShowTitle] = useState(false);
  const [moreProduct, setMoreProducts] = useState(10);
  const { data, isError, isLoading, isFetching, refetch } =
    useGetProductsQuery(moreProduct);
  useEffect(() => {
    if (hideDefaults) {
      setShowTitle(false);
    } else {
      setShowTitle(true);
    }
    console.log(data?.products)
  }, [hideDefaults, data]);
  return (
    <Container title="BESTSELLER PRODUCTS" style={style} showDefaults={showTitle}>
      <div className={styles.productCard}>
        <div className={styles.itemCard}>
          {data?.products.map((product) => (
            <ProductItems key={product.id} product={product} />
          ))}
        </div>
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
        {moreProduct !== data?.total && showButton ? (
          <Button
            className="btnMD"
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
    </Container>
  );
}

Products.propTypes = {
  showButton: PropTypes.bool,
  hideDefaults: PropTypes.bool,
  style: PropTypes.object,
};

export default Products;
