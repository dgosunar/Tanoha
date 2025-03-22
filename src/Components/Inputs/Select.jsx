import React from "react";
import "./../../Styles/index.css";
import Label from "./Label";
import styled from "styled-components";

export default function Select({ label, defaultValue, values, onChange }) {
  return (
    <Label label={label}>
      <SelectStyle
        className="generalText"
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {values.map((v) => (
          <option key={v.id} value={v}>
            {v}
          </option>
        ))}
      </SelectStyle>
    </Label>
  );
}

// <Select
//   label={"Espacio de Trabajo"}
//   defaultValue={workspace[space].name}
//   values={workspace.map((w) => w.name)}
//   onChange={(event) => onChangeSpace(event.target.value)}
// />

export const SelectStyle = styled.select`
  display: flex;
  width: 100%;
  padding: 10px;
  margin-top: -10px;
  text-align: center;
  color: var(--primary-main);
  background-color: var(--white);
  border: 1px solid var(--gray-light);
  border-radius: 21px;

  &:focus-visible {
    outline: none;
    border: 1px solid var(--secondary-main);
  }
`;
