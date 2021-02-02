import PropTypes from "prop-types"; //used to set default data types for stuff

const Button = ({ color, text, weight, handleShowForm }) => {
  return (
    <button
      onClick={handleShowForm}
      style={{ background: color, weight: weight }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
