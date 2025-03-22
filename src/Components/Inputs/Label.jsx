import React from "react";
import styled from "styled-components";

export default function Label({ children, label }) {
  return (
    <Container>
      <LabelStyle className="miniTextB">{label}</LabelStyle>
      {children}
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const LabelStyle = styled.div`
  position: relative;
  width: fit-content;
  padding: 2px 10px;
  background-color: var(--white);
  color: var(--primary-main);
  border-radius: 8px 8px 0px 0px;
`;
