import styled from "styled-components";
import "./SelectorSpace.css";
import React from "react";
import { Context } from "../../Context";
import Select from "../Inputs/Select";

function SelectorSpace() {
  const { workspace, space, setSpace } = React.useContext(Context);

  const onChangeSpace = (nameSpace) => {
    const id = workspace.findIndex((s) => s.name === nameSpace);
    setSpace(id);
  };

  return (
    <Container>
      <Select
        label={"Espacio de Trabajo"}
        defaultValue={workspace[space].name}
        values={workspace.map((w) => w.name)}
        onChange={(event) => onChangeSpace(event.target.value)}
      />
    </Container>
  );
}
export { SelectorSpace };

export const Container = styled.div`
  display: flex;
  min-width: calc(300px);
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 768px) {
  }
`;
