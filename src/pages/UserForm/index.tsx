import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useToast } from '../../hooks/ToastContext';
import getValidationErrors from '../../utils/getValidationErrors';
import "./styles.css";
import Button from '../../components/Button';
import WarningIcon from "../../assets/icons/WarningIcon.svg";
import Input from '../../components/Input2';
import PageHeader from "../../components/PageHeader";

interface UserFormData{
  nome_usuario: string;
  email: string;
  senha: string;
}

const UserForm: React.FC = () =>{

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: UserFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          nome_usuario: Yup.string()
            .required('Nome do usuário é obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório'),
          senha: Yup.string()
            .required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // await signIn({
        //   email: data.email,
        //   password: data.password,
        // });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no preenchimento dos campos',
          description: 'Todos os campos são obrigatórios!',
        });
      }
    },
    [addToast, history],
  );
  return (
    <div id="create-user-form" className="container">
      <PageHeader title="Cadastrar usuários" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <main>
          <fieldset>
              <legend>Dados do usuário</legend>
              <Input name="nome_usuario" label="Nome do usuário" type="text" />
              <Input name="email" label="E-mail" type="e-mail" />
              <Input name="senha" label="Senha" type="password" />
          </fieldset>
          <footer>
            <p>
              <img src={WarningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <Button type="submit">Salvar cadastro</Button>
          </footer>
        </main>
      </Form>
    </div>
  );
}

export default UserForm;
