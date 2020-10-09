import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

interface SimpleButtonProps {
  link: string;
}

const SimpleButton: React.FC<SimpleButtonProps> = (props) => {
  return (
    <Link to={props.link} className="simple-button">
      {props.children}
    </Link>
  );
};

export default SimpleButton;
