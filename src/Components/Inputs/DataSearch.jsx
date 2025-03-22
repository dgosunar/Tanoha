import React from "react";
import styled from "styled-components";

export default function DataSearch({
  placeholder,
  searchValue,
  setSearchValue,
}) {
  return (
    <InputStyle
      placeholder={placeholder}
      className="generalText"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

// <DataSearch
//   placeholder={"Buscar"}
//   searchValue={searchValue}
//   setSearchValue={setSearchValue}
// />

export const InputStyle = styled.input`
  display: flex;
  width: calc(100% - 22px);
  height: 18px;
  padding: 10px;
  background-color: var(--white);
  border: 1px solid var(--gray-light);
  border-radius: 21px;
  resize: none;
  overflow: auto;
  scrollbar-width: none;
  text-align: center;

  &:focus-visible {
    outline: none;
    border: 1px solid var(--secondary-main);
  }
`;
