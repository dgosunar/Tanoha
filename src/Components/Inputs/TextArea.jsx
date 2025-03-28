import React from "react";
import styled from "styled-components";
import Label from "./Label";

export default function TextArea({
  label,
  placeholder,
  rows,
  defaultValue,
  setText,
}) {
  return (
    <Label label={label}>
      <TextAreaStyle
        className="generalText"
        placeholder={placeholder}
        defaultValue={defaultValue}
        rows={rows}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
    </Label>
  );
}

// <TextArea label={"Nombre"} placeholder={"Pedro, Juan..."} />

export const TextAreaStyle = styled.textarea`
  display: flex;
  width: calc(100% - 22px);
  padding: 10px;
  margin-top: -10px;
  background-color: var(--white);
  border: 1px solid var(--gray-light);
  border-radius: 21px;
  resize: none;
  overflow: auto;
  scrollbar-width: none;

  &:focus-visible {
    outline: none;
    border: 1px solid var(--secondary-main);
  }
`;
