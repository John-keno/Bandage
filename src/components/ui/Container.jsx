import PropTypes from "prop-types";
function Container(props) {
  const { children, title, showDefaults, style } = props;
  return (
    <div className="container">
      <div className="title" >
        {showDefaults && <h4>Featured Products</h4>}
        <h3 style={style}>{title}</h3>
        {!showDefaults && <hr style={{color: '#ececec', height: '2px'}}/>}
        {showDefaults && <p>Problems trying to resolve the conflict between</p>}
      </div>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  showDefaults: PropTypes.bool,
  style: PropTypes.object,
};
export default Container;
