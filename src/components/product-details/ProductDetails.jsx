import PropTypes from "prop-types";
import styles from "./productDetails.module.css";
import Carousel from "../ui/Carousel";
import { useGetProductByIdQuery } from "../../features/apiSlice/dummyData";
import ReviewsStars from "../ui/ReviewsStars";
import { AnimatedLoading } from "../../icons/icons";

function ProductDetails(props) {
  const { id } = props;
  const { data, isSuccess, isFetching, isError } = useGetProductByIdQuery(id);
  if (isSuccess) {
    console.log(data);
  }
  return (
    <div className={styles.pdDetailsContainer}>
      {isSuccess ? (
        <div className={styles.pdDetailsCard}>
          <div className={styles.carousel}>
            <div className={styles.carouselOptions}>
              {isSuccess && <Carousel images={data?.images} />}
            </div>
          </div>
          <div className={styles.pdInfo}>
            <h4 style={{ textAlign: "left" }}>{data?.title}</h4>
            <div className={styles.stars}>
              {isSuccess && <ReviewsStars stars={Math.round(data?.rating)} />}
              <span className={styles.revsnrates}>
                <h6>{data?.reviews?.length}&nbsp;Reviews</h6>
              </span>
            </div>
            <h3 style={{ textAlign: "left" }}>${data?.price}</h3>
            <div className={styles.availStatus}>
              <h6>Availabilty&nbsp;:</h6>
              <span className={styles.availStatusValue}>
                <h6>{data?.availabilityStatus}</h6>
              </span>
            </div>
            <div className={styles.line}></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: '100%'
          }}
        >
          <AnimatedLoading />
        </div>
      )}
    </div>
  );
}

ProductDetails.proptypes = {
  id: PropTypes.number,
};

export default ProductDetails;
