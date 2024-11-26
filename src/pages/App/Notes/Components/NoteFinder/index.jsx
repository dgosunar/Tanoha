import React from "react";
import { Context } from "../../../../../Context";

function NoteFinder() {
  const { searchNotes, setSearchNotes } = React.useContext(Context);

  return (
    <input
      placeholder="... Buscar entre tus notas... "
      className="TodoSearch generalText"
      value={searchNotes}
      onChange={(event) => {
        setSearchNotes(event.target.value);
      }}
    />
  );
}

export { NoteFinder };
