import PropTypes from "prop-types";

function Input(props) {
  const { id, type, defaultValue, onChange, placeholder, label, style, className } =
    props;
  return (
    <label>
      {label}
      <input
        type={type}
        id={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        style={style}
        className={className}
      />
    </label>
  );
}
Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.any,
  style:PropTypes.object,
  className: PropTypes.any,
  onChange: PropTypes.func,
};
export default Input;
