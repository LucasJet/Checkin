import React, { useRef, useCallback } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';
import getValidationErrors from '../../utils/getValidationErrors';
import "./styles.css";
import Button from '../Button';
// import SimpleButton from '../../components/SimpleButton';
import Input from '../../components/Input2';

interface LoginContainerProps {
}

interface SignInFormData {
  email: string;
  password: string;
}

// const LoginContainer: React.FC<LoginContainerProps> = (props) => {
const LoginContainer: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail Obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'Senha deve ter no mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na Autenticação',
          description: 'Ocorreu um erro ao fazer login, verifique as credenciais!',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <div className="login-container">
        <strong>Faça login</strong>
        <form id="login-form">
          <Input name="email" icon={FiMail} placeholder="E-mail" type="email" />
          <Input name="password" icon={FiLock} placeholder="Senha" type="password"/>
        </form>
        <Button type="submit">Entrar</Button>
      </div>
    </Form>
  );
};

export default LoginContainer;
