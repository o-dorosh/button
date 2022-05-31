import PropTypes from "prop-types";
import "./Button.css";

function Button({ color }) {
  return (
    <button className="Button" style={{ color: color }}>
      Click me!
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Button;
