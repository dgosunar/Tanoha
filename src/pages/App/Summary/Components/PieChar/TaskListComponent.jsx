import React from "react";
import SummaryBox from "./SummaryBox";
import { Task } from "../../../Tasks/Components/Task";
import { TaskList } from "../../../Tasks/taskUI";
import styled from "styled-components";

export default function TaskListComponent({ label, onClick, task }) {
  return (
    <>
      <SummaryBox label={label} onClick={onClick} />
      <ContainerTaskList>
        <TaskList>
          <div className="list">
            {task
              .filter((t) => t.status === 1)
              .map((t) => (
                <Task key={t.id} task={t} />
              ))}
          </div>
        </TaskList>
      </ContainerTaskList>
    </>
  );
}

export const ContainerTaskList = styled.div`
  display: flex;
  height: calc(100% - 25px);

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
