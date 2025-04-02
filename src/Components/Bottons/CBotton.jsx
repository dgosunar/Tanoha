import styled from "styled-components";

function CBotton({ setOpenModal }) {
  return (
    <CreateTodoButton>
      <PlusBotton
        onClick={() => {
          setOpenModal((state) => !state);
        }}
        className="secondaryTitle"
      >
        +
      </PlusBotton>
    </CreateTodoButton>
  );
}

export { CBotton };

export const CreateTodoButton = styled.div`
  position: absolute;
  z-index: 1;
  cursor: pointer;
  bottom: 15px;
  right: 120px;

  @media screen and (max-width: 1024px) {
    right: 0px;
  }

  @media screen and (max-width: 800px) {
  }
  @media screen and (max-width: 768px) {
    bottom: 0px;
    right: calc((100% / 2) - 35px);
    z-index: 10;
  }
`;

export const PlusBotton = styled.div`
  display: flex;
  color: var(--black);
  background-color: var(--secondary-main);
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 40px;
`;
