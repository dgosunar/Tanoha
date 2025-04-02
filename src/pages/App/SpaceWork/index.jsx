import React from "react";
import { Dash } from "../../../Layout/Dash";
import { ContextProvider } from "../../../Context";
import SpaceUI from "./spaceUI";

function SpaceWork() {
  return (
    <Dash title={"Espacios de Trabajo"}>
      <ContextProvider>
        <SpaceUI />
      </ContextProvider>
    </Dash>
  );
}
export default SpaceWork;
