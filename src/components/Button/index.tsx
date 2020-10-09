import React, { ButtonHTMLAttributes } from 'react';
import "./styles.css";
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" className="simple-button" {...rest}>
    {children}
  </Container>
);

export default Button;
