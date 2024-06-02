import PropTypes from "prop-types";

function Button(props) {
  const { children, className, style, onClick, disabled } = props;

  return (
    <button className={className} style={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;