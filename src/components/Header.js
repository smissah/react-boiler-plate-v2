// import React from "react"; //not needed anymore - only for Class based components beayse it uses React.Component
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ handleShowForm, trueOrFalse }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      {location.pathname === "/" && (
        <Button
          color="#58D68D"
          text={trueOrFalse === true ? "-" : "+"}
          handleShowForm={handleShowForm}
        />
      )}
    </header>
  );
};

export default Header;
