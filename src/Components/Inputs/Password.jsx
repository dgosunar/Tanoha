import React from "react";
import styled from "styled-components";
import Label from "./Label";

export default function Password({ label, placeholder, setPassword }) {
  return (
    <Label label={label}>
      <PasswordStyle
        placeholder={placeholder}
        className="generalText"
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
    </Label>
  );
}

// <Password
//  label={"Repetir Contraseña"}
//  placeholder={"***************"}
// />;

export const PasswordStyle = styled.input`
  display: flex;
  width: calc(100% - 22px);
  height: 18px;
  padding: 10px;
  margin-top: -10px;
  text-align: center;
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
