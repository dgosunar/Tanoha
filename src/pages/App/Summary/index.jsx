import React from "react";
import { Dash } from "../../../layout/Dash";
import { Context } from "../../../Context";
import styled from "styled-components";
import { CBotton } from "../../../Components/Bottons/CBotton";
import { NewTask } from "../Tasks/Mods/NewTask";
import { Modal } from "../../../Components/Modals/Modal";
import MyPieChart, { PieContainer } from "./Components/PieChar/MyPieChart";
import { Note } from "../Notes/Components/Note";
import { useNavigate } from "react-router-dom";
import SummaryBox from "./Components/PieChar/SummaryBox";
import TaskListComponent from "./Components/PieChar/TaskListComponent";

function Summary() {
  const {
    workspace,
    task,
    openModal,
    setOpenModal,
    selectNotes,
    space,
    deleteNote,
  } = React.useContext(Context);

  const navigate = useNavigate();
  const redirecionar = (dirección) => navigate(dirección);
  const toWorkspaces = () => {
    redirecionar("/Tanoha/space");
  };
  const toTasks = () => {
    redirecionar("/Tanoha/tasks");
  };
  const toNotes = () => {
    redirecionar("/Tanoha/notes");
  };
  const onDelete = (id) => {
    deleteNote(id);
  };

  return (
    <Dash title={"Resumen"}>
      <Container>
        <Workspaces>
          <SummaryBox label={"Porcentage_de_Progreso"} onClick={toWorkspaces} />
          <WorkspaceStatistics>
            {workspace.map((s) => (
              <MyPieChart space={s.id} label={s.name} onClick={toWorkspaces} />
            ))}
            <PieContainer />
          </WorkspaceStatistics>
        </Workspaces>
        <TasksPendingMobile>
          <TaskListComponent
            label={"Tareas_Pendientes"}
            onClick={toTasks}
            task={task}
          />
        </TasksPendingMobile>
        <RecentNotes>
          <SummaryBox label={"Notas_Recientes"} onClick={toNotes} />
          <NotesList>
            {selectNotes(space).map((n) => (
              <Note n={n} onDelete={onDelete} />
            ))}
          </NotesList>
        </RecentNotes>
        <CBotton setOpenModal={setOpenModal} />
        {openModal && (
          <Modal>
            <NewTask />
          </Modal>
        )}
      </Container>
      <TasksPendingDesk>
        <TaskListComponent
          label={"Tareas_Pendientes"}
          onClick={toTasks}
          task={task}
        />
      </TasksPendingDesk>
    </Dash>
  );
}

export default Summary;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: calc(100% - 380px);
  margin-right: 10px;
  justify-content: flex-start;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
    margin-right: 0px;
    width: 100%;
    min-height: calc(123px + 165px + 400px);
  }
`;

export const Workspaces = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
`;
export const WorkspaceStatistics = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 123px;
  overflow-x: auto;
  scrollbar-width: none;
  padding-bottom: 10px;
`;

export const RecentNotes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  height: 400px;
`;
export const NotesList = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  scrollbar-width: none;
  padding-bottom: 10px;
`;

export const TasksPendingDesk = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const TasksPendingMobile = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 165px;
  }
`;
