import PropTypes from "prop-types";

function Button(props) {
  const { children, className, onClick } = props;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.object || PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;