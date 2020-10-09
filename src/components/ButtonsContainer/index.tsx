import React from "react";
import { Link } from "react-router-dom";
import { User, Users, Book } from "react-feather";
import "./styles.css";

interface ButtonContainerProps {}

const ButtonContainer: React.FC<ButtonContainerProps> = (props) => {
  return (
    <div className="buttons-container">
      <Link to="/user-list" className="notifications">
        <User size={28} />
        <p>Cadastrar alunos</p>
      </Link>
      <Link to="/class-list" className="notifications">
        <Users size={28} />
        <p>Cadastrar turmas</p>
      </Link>
      <Link to="/discipline-list" className="notifications">
        <Book size={28} />
        <p>Cadastrar disciplinas</p>
      </Link>
    </div>
  );
};

export default ButtonContainer;
