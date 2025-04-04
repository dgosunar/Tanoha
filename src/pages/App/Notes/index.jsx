import React from "react";
import { Dash } from "../../../Layout/Dash";
import { ContextProvider } from "../../../Context";
import NotesUI from "./notesUI";

function Notes() {
  return (
    <Dash title={"Notas"}>
      <ContextProvider>
        <NotesUI />
      </ContextProvider>
    </Dash>
  );
}

export default Notes;
