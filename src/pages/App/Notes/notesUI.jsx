import React from "react";
import { Context } from "../../../Context";
import { SelectorSpace } from "../../../Components/SelectorSpace";
import DataSearch from "../../../Components/Inputs/DataSearch";
import { Modal } from "../../../Components/Modals/Modal";
import { NewNote } from "./Mods/NewNote";
import { CBotton } from "../../../Components/Bottons/CBotton";
import { Note } from "./Components/Note";
import { NoteDetails } from "./Mods/NoteDetails";
import { NoteEdit } from "./Mods/NoteEdit";
import styled from "styled-components";
import "./notes.css";

function NotesUI() {
  const {
    notesLoading,
    notesError,
    deleteNote,
    showDetails,
    showEdit,
    openModal,
    setOpenModal,
    selectNotes,
    space,
    searchNotes,
    setSearchNotes,
  } = React.useContext(Context);

  const notes = selectNotes(space);

  const onDelete = (id) => {
    deleteNote(id);
  };

  return (
    <Container>
      <SelectorSpace />
      <DataSearch
        placeholder={"... Buscar entre tus notas... "}
        value={searchNotes}
        setSearchValue={setSearchNotes}
      />

      <div className="generalNotes">
        {!notesLoading &&
          !notesError &&
          notes.length > 0 &&
          notes.map((n) => <Note key={n.id} n={n} onDelete={onDelete} />)}
      </div>
      <CBotton setOpenModal={setOpenModal} title="Nueva" />

      {showEdit && (
        <Modal>
          <NoteEdit />
        </Modal>
      )}

      {showDetails && (
        <Modal>
          <NoteDetails />
        </Modal>
      )}

      {openModal && (
        <Modal title="Nueva Nota">
          <NewNote />
        </Modal>
      )}
    </Container>
  );
}
export default NotesUI;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 10px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 768px) {
  }
`;
