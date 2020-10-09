import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "../../assets/icons/ArrowBack.svg";
import "./styles.css";
import SimpleButton from "../SimpleButton";

interface PageHeaderProps {
  title: string;
  addLink?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={ArrowBackIcon} alt="Voltar" />
        </Link>
      </div>
      <div className="header-content">
        <div>
          <strong>{props.title}</strong>
          {props.addLink ? (
            <SimpleButton link={props.addLink}>Adicionar</SimpleButton>
          ) : (
            false
          )}
        </div>
        {props.children}
      </div>
    </header>
  );
};

export default PageHeader;
