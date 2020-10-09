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

interface classFormData{
  turma: number;
  disciplina: number;
  aluno: number;
}

const ClassForm: React.FC = () =>{

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: classFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          turma: Yup.string()
            .required('Turma Obrigatória'),
          disciplina: Yup.string()
            .required('Disciplina Obrigatória'),
          aluno: Yup.string()
            .required('Aluno Obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
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
          title: 'Erro no preenchimento dos campos',
          description: 'Todos os campos são obrigatórios!',
        });
      }
    },
    [addToast, history],
  );
  return (
    <div id="create-class-form" className="container">
      <PageHeader title="Cadastrar turma" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <main>
          <fieldset>
              <legend>Dados da turma</legend>
              <Input name="turma" label="Código da turma" />
              <Input name="disciplina" label="Código da disciplina" type="text" />
              <Input name="aluno" label="Aluno" type="text" />
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

export default ClassForm;