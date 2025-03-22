import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "../../../../Context";
import styled from "styled-components";
import { PBotton, SBotton } from "../../../../Components/Bottons";
import { Card } from "../../../../Components/Modals/Card";
import ReactDatePicker from "react-datepicker";
import TextArea from "../../../../Components/Inputs/TextArea";
import Select from "../../../../Components/Inputs/Select";
import Date from "../../../../Components/Inputs/MyDate";
import MyDate from "../../../../Components/Inputs/MyDate";

function NewTask() {
  const { setOpenModal, addTask, workspace, space } = React.useContext(Context);

  const [description, setDescription] = React.useState("");
  const [mySpace, setMySpace] = React.useState(0);
  const [date, setDate] = React.useState("");

  const onSubmit = () => {
    addTask(description, mySpace, date);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChangeSpace = (nameSpace) => {
    const id = workspace.findIndex((s) => s.name === nameSpace);
    setMySpace(id);
  };

  return (
    <Card title="Crear Nueva Tarea">
      <Container>
        <Form>
          <TextArea
            label={"Ingresa una nueva tarea"}
            placeholder={"Hacer..."}
            rows={"1"}
            setText={setDescription}
          />
          <MyDate label="Fecha Limite:" setDate={setDate} />
          <Select
            label={"Espacio de Trabajo"}
            defaultValue={workspace[space].name}
            values={workspace.map((w) => w.name)}
            onChange={(event) => onChangeSpace(event.target.value)}
          />
          <Details />
        </Form>

        <BottonBox>
          <SBotton onClick={onCancel}>Cancelar</SBotton>
          <PBotton onClick={onSubmit}>Crear</PBotton>
        </BottonBox>
      </Container>
    </Card>
  );
}

export { NewTask };

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: calc(100% - 20px);
  gap: 10px;
  padding: 10px 10px;

  .newTaskStyle {
    background: var(--white);
    margin: 0;
    padding: 10px;
    width: calc(100% - 20px);
    height: 70px;
    color: var(--black);
    font-family: "Montserrat";
    border: 1px solid var(--primary-main);
    border-radius: 8px;
  }
  .newTaskStyle::placeholder {
    color: var(--gray-light);
  }
  .newTaskStyle:focus {
    outline-color: var(--secondary-main);
  }
`;

export const Details = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;

  .calendar {
    display: flex;
    padding: 10px;
    border-radius: 8px;
    font-family: "Montserrat";
    border: 1px solid var(--primary-main);
  }
  .calendar::placeholder {
    color: var(--gray-light);
  }
  .calendar:focus {
    outline-color: var(--secondary-main);
  }
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const StatusBox = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 5px);

  .status {
    display: flex;
    padding: 10px;
    width: 183px;
    border-radius: 8px;
    font-family: "Montserrat";
    border: 1px solid var(--primary-main);
    background-color: var(--white);
  }
  .status::placeholder {
    color: var(--gray-light);
  }
  .status:focus {
    outline-color: var(--secondary-main);
  }
`;
export const Label = styled.div`
  font-size: 12px;
  width: fit-content;
  padding: 0 5px;
  background-color: var(--white);
  margin: 0 0 -8px 1px;
  color: var(--primary-main);
  z-index: 1;
  border-radius: 8px 8px 0 0;
`;

export const BottonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: calc(100% - 40px);
  padding: 10px 20px;
`;
