import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Context } from "../../Context";

function Modal({ children }) {
  const { setOpenModal } = React.useContext(Context);

  const onCancel = () => {
    setOpenModal(false);
  };

  return ReactDOM.createPortal(
    <ModalStyle>
      <Content>{children}</Content>
      <BackgroundModal onClick={onCancel} />
    </ModalStyle>,
    document.getElementById("modal")
  );
}

export { Modal };

export const ModalStyle = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const BackgroundModal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 23, 36, 0.75);
  z-index: 40;
`;
