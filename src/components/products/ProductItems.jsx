import styles from "./products.module.css";
import PropTypes from "prop-types";

function ProductItems({ product }) {
  const { images, title, category, price, discountPercentage } = product;
  return (
    <div className={styles.item}>
      <img src={images[0]} alt="product" />
      <div className={styles.details}>
        <h5>{title}</h5>
        <a href="#">{category}</a>
        <div className={styles.prices}>
          <h5 className={styles.priceLeft}>{`$${(
            price /
            (1 - discountPercentage / 100)
          ).toFixed(2)}`}</h5>
          <h5 className={styles.priceRight}>${price}</h5>
        </div>
      </div>
    </div>
  );
}

ProductItems.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.any,
    title: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    discountPercentage: PropTypes.number,
  }),
};

export default ProductItems;
