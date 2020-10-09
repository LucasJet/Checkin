import React from "react";
import "./styles.css";
import ButtonContainer from "../../components/ButtonsContainer";
import LoginContainer from "../../components/LoginContainer";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <h1>Seja bem-vindo!</h1>
          <h2>Este é um protótipo de tela para o Check-In</h2>
        </div>
        <ButtonContainer />
        <LoginContainer />
      </div>
    </div>
  );
}

export default Landing;
