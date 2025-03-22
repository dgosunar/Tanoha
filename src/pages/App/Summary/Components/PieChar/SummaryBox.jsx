import React from "react";
import styled from "styled-components";

export default function SummaryBox({ label, onClick }) {
  return (
    <SummaryBoxLabel className="mediumText" onClick={onClick}>
      {label}
    </SummaryBoxLabel>
  );
}

export const SummaryBoxLabel = styled.div`
  text-align: center;
  cursor: pointer;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 1);
`;
