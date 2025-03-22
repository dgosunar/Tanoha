import React from "react";
import Label from "./Label";
import styled from "styled-components";

export default function MyDate({ label, setDate }) {
  return (
    <Label label={label}>
      <InputStyle
        type="date"
        className="generalText"
        onChange={(event) => {
          setDate(event.target.value);
        }}
      />
    </Label>
  );
}

export const InputStyle = styled.input`
  display: flex;
  width: calc(100% - 22px);
  height: 18px;
  padding: 10px;
  margin-top: -10px;
  justify-content: center;
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
