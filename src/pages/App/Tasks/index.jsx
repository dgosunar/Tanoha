import React from "react";
import { Dash } from "../../../Layout/Dash";
import TaskUI from "./taskUI";

function Tasks() {
  return (
    <Dash title={"Tareas"}>
      <TaskUI />
    </Dash>
  );
}

export default Tasks;
