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

interface DisciplineFormData{
  cod_disciplina: number;
  nome_disciplina: string;
  semestre: number;
  data_ini: string;
  data_fim:string;
  docente: string;
  curso: string;
  dia_semana: string;
}

const DisciplineForm: React.FC = () =>{

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: DisciplineFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          cod_disciplina: Yup.string()
            .required('Código da Disciplina Obrigatória'),
          nome_disciplina: Yup.string()
            .required('O nome da disciplina é obrigatório'),
          semestre: Yup.string()
            .required('O semestre é obrigatório'),
          data_ini: Yup.date()
            .required('A data de início é obrigatória'),
          data_fim: Yup.date()
            .required('A data de fim é obrigatória'),
          docente: Yup.string()
            .required('O docente é obrigatório'),
          curso: Yup.string()
            .required('Informar o curso'),
          dia_semana: Yup.string()
            .required('Informar o dia da semana da aula'),
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
    <div id="create-discipline-form" className="container">
      <PageHeader title="Cadastrar disciplina"/>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <main>
          <fieldset>
              <legend>Dados da disciplina</legend>
              <Input name="cod_disciplina" label="Código da disciplina" type="text" />
              <Input name="nome_disciplina" label="Nome da Disciplina" type="text" />
              <Input name="semestre" label="Semestre" type="text" />
              <Input name="data_ini" label="Data de início" type="date" />
              <Input name="data_fim" label="Data Fim" type="date" />
              <Input name="docente" label="Docente" type="text" />
              <Input name="curso" label="Curso" type="text" />
              <Input name="dia_semana" label="Dia da semana" type="text" />
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

export default DisciplineForm;