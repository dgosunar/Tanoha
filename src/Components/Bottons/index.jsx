import styled from "styled-components";
import { GrClose } from "react-icons/gr";

export function XButton({ onClick }) {
  return (
    <CloseButton onClick={onClick}>
      <GrClose className="xBotton" />
    </CloseButton>
  );
}

export const CloseButton = styled.div`
  display: flex;
  width: 30px;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;

  .xBotton {
    display: flex;
    height: 30px;
    color: var(--accent-red);
  }
`;

export const Botton = styled.div`
  display: flex;
  height: 24px;
  color: var(--black);
  justify-content: center;
  align-items: center;
  padding: 5px 30px;
  border-radius: 16px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const PBotton = styled(Botton)`
  background-color: var(--secondary-main);

  &:hover {
    background-color: var(--secondary-light);
  }
  &:active {
    background-color: var(--secondary-main);
  }
`;

export const SBotton = styled(Botton)`
  background-color: var(--gray);

  &:hover {
    background-color: var(--gray-light);
  }
  &:active {
    background-color: var(--gray);
  }
`;

export const TBotton = styled(Botton)`
  background-color: var(--primary-main);
  color: var(--white);

  &:hover {
    background-color: var(--primary-light);
  }
  &:active {
    background-color: var(--primary-main);
  }
`;

export const BottonBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
