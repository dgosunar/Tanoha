import React from "react";
import { Context } from "../../../../../Context";

function TaskFinder() {
  const { searchTasks, setSearchTasks } = React.useContext(Context);

  return (
    <input
      placeholder="... Buscar entre tus tareas... "
      className="TodoSearch generalText"
      value={searchTasks}
      onChange={(event) => {
        setSearchTasks(event.target.value);
      }}
    />
  );
}

export { TaskFinder };
