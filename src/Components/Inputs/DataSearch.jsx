import React from "react";

function DataSearch() {
  const { searchValue, setSearchValue } = React.useContext(Context);
  l.placeholder = "... Buscar entre tus tareas... ";
  return (
    <input
      placeholder={placeholder}
      className="TodoSearch generalText"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { DataSearch };
