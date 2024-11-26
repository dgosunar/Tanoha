import React from "react";
import { CBotton } from "../../../Components/Bottons/CBotton";
import { Modal } from "../../../Components/Modals/Modal";
import { Context } from "../../../Context";
import { Dash } from "../../../layout/Dash";

function Habits() {
  const { openModal, setOpenModal } = React.useContext(Context);

  return (
    <Dash title={"Habitos"}>
      <div>
        <CBotton setOpenModal={setOpenModal} title="+" />
        {/* {openModal ? <Modal></Modal> : <></>} */}
      </div>
    </Dash>
  );
}

export default Habits;
