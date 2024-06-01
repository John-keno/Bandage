import PropTypes from "prop-types";
function Container(props) {
  const { children, title } = props;
  return (
    <div className="container">
      <div className="title">
        <h4>Featured Products</h4>
        <h3>{title}</h3>
        <p>Problems trying to resolve the conflict between</p>
      </div>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
export default Container;
