import PropTypes from "prop-types";
import { StarFilled, StarOutline } from "../../icons/icons";
function ReviewsStars(props) {
  const { stars } = props;

  return (
    <>
      {[...Array(stars)].map((u, i) => (
        <StarFilled key={i} />
      ))}

      {[...Array(5 - stars)].map((u, i) => (
        <StarOutline key={i} />
      ))}
    </>
  );
}

ReviewsStars.propTypes = {
  stars: PropTypes.number,
};
export default ReviewsStars;
