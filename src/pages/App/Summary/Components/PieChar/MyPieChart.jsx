import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Context } from "../../../../../Context";
import styled from "styled-components";

export default function MyPieChart({ space, label }) {
  const { totalPendingSpace, totalCompletedSpace } = React.useContext(Context);

  const porcentaje = Math.floor(
    (totalCompletedSpace(space) /
      (totalCompletedSpace(space) + totalPendingSpace(space))) *
      100
  );

  return (
    <PieContainer>
      <PieChart
        series={[
          {
            data: [
              { id: 1, value: totalCompletedSpace(space), color: "#78F167" },
              { id: 0, value: totalPendingSpace(space), color: "#68D6F1" },
            ],
            innerRadius: 60,
            outerRadius: 100,
            paddingAngle: 1,
            startAngle: -90,
            endAngle: 90,
            cx: 96,
            cy: 96,
          },
        ]}
      />
      <Percentage className="primarySubtitle">
        {porcentaje >= 0 ? `${porcentaje}%` : "Sin Tareas"}
      </Percentage>
      <div className="generalText">{label}</div>
    </PieContainer>
  );
}

export const PieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100% - 16px);
  width: 201px;
  min-width: 201px;
  box-shadow: 0px 4px 10px 0px var(--black);
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 21px;
  padding: 8px;
`;

export const Percentage = styled.div`
  display: flex;
  position: absolute;
  height: fit-content;
  bottom: 30px;
`;
