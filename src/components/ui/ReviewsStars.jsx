import PropTypes from "prop-types";
import { StarFilled, StarOutline } from "../../icons/icons";
function ReviewsStars(props) {
  const { stars, className } = props;

  return (
    <>
      {[...Array(stars)].map((u, i) => (
        <StarFilled className={className} key={i} />
      ))}

      {[...Array(5 - stars)].map((u, i) => (
        <StarOutline className={className} key={i} />
      ))}
    </>
  );
}

ReviewsStars.propTypes = {
  stars: PropTypes.number,
  className: PropTypes.string,
};
export default ReviewsStars;
