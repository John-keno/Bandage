import { Link } from "react-router-dom";
import styles from "./products.module.css";
import PropTypes from "prop-types";
import Button from "../ui/Button";
import ReviewsStars from "../ui/ReviewsStars";
import { ClipIcon, WishlistIcon } from "../../icons/icons";
import { useDispatch } from "react-redux";
import { addToCart, clearCart } from "../../features/slices/CartSlice";

function ProductItems({ product }) {
  const {
    id,
    images,
    title,
    category,
    price,
    discountPercentage,
    rating,
    reviews,
    availabilityStatus,
    stock,
  } = product;

  const dispatch = useDispatch();

  function handleAddToCart(item) {
    console.log(item);
    dispatch(addToCart(product));
  }
  return (
    <div className={styles.item}>
      {stock == 0 && (
        <div className={styles.outOfStock}>
          <div className={styles.item}>
            {availabilityStatus}
          </div>
        </div>
      )}
      <Link className={styles.link} to={`/shop/product/${id}`}>
        <div className={styles.sideImgDiv}>
          <button className={styles.sideImgBtn}>
            <ClipIcon />
          </button>
          <button className={styles.sideImgBtn}>
            <WishlistIcon />
          </button>
        </div>
        <div className={styles.perctoff}>{discountPercentage}%</div>
        <img src={images[0]} alt="product" />
        <div className={styles.details}>
          <h5>{title}</h5>
          <div>
            {category}
          </div>
          <div className={styles.prices}>
            <h5 className={styles.priceLeft}>
              &#36;{`${(price / (1 - discountPercentage / 100)).toFixed(2)}`}
            </h5>
            <h5 className={styles.priceRight}>&#36;{price}</h5>
          </div>
          <div className={styles.stars}>
            <ReviewsStars stars={Math.round(rating)} />
            <span className={styles.revsnrates}>
              {rating}&nbsp;({reviews.length})
            </span>
          </div>
        </div>
      </Link>
      <div className={styles.line}></div>

      <div className={styles.addToCart}>
        <Button
          className={styles.addToBasket}
          onClick={() => handleAddToCart(product)}
        >
          ADD TO BASKET
        </Button>
      </div>
    </div>
  );
}

ProductItems.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    images: PropTypes.any,
    title: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    discountPercentage: PropTypes.number,
    rating: PropTypes.number,
    reviews: PropTypes.arrayOf(PropTypes.object),
    availabilityStatus: PropTypes.string,
    stock: PropTypes.number,
  }),
};

export default ProductItems;
