import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "../../../Context";
import styled from "styled-components";
import { BottonBox, PBotton, SBotton } from "../../../Components/Bottons";
import { Card } from "../../../Components/Modals/Card";
import TextArea from "../../../Components/Inputs/TextArea";

function NewSpace() {
  const { setOpenModal, addSpace } = React.useContext(Context);

  const [description, setDescription] = React.useState("");
  //const [color, setColor] = React.useState(0);

  const onSubmit = () => {
    //addSpace(description, color);
    addSpace(description, 0);
    setOpenModal(false);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChangeDescripcion = (event) => {
    setDescription(event.target.value);
  };

  return (
    <Card title="Crear Nuevo Espacio">
      <Container>
        <TextArea
          label={"Nombre del Espacio de Trabajo"}
          rows={"1"}
          placeholder={"..."}
          setText={setDescription}
        />
        {/* <TextBox>
            <Label>Selecciona un Color</Label>
            <div className="selectColor">
              {accentColors.map((c) => (
                <button
                  className="color"
                  style={{ backgroundColor: c.color }}
                  onClick={() => thisColor(c.id)}
                />
              ))}
            </div>
          </TextBox> */}
        <BottonBox>
          <SBotton onClick={onCancel}>Cancelar</SBotton>
          <PBotton onClick={onSubmit}>Crear</PBotton>
        </BottonBox>
      </Container>
    </Card>
  );
}

export { NewSpace };

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;
