import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../../layout";
import { Context } from "../../../Context";
import TextArea from "../../../Components/Inputs/TextArea";
import Select, { SelectStyle } from "../../../Components/Inputs/Select";
import DataSearch from "../../../Components/Inputs/DataSearch";
import Date from "../../../Components/Inputs/MyDate";
import Password from "../../../Components/Inputs/Password";
import {
  BottonBox,
  PBotton,
  SBotton,
  TBotton,
} from "../../../Components/Bottons";
import MyDate from "../../../Components/Inputs/MyDate";

function Singup() {
  const { searchValue, setSearchValue } = React.useContext(Context);

  const navigate = useNavigate();
  const redirecionar = (dirección) => navigate(dirección);

  const [user, setUser] = React.useState("");
  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [birthdate, setBirthdate] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password1, setPassword1] = React.useState("");
  const [password2, setPassword2] = React.useState("");

  const onSubmit = () => {
    // addProfile(user, name, lastname, birthdate, gender, password);
    redirecionar("/Tanoha/login");
  };

  const onCancel = () => {
    redirecionar("/Tanoha/");
  };

  return (
    <Layout>
      <MainBox>
        <ColumnBox>
          <img
            src="./Images/Usuario.png"
            alt="Descripción de la imagen"
            width="150"
            height="150"
          />
          <TextArea
            label={"Usuario"}
            placeholder={"Pedro_Rodriguez..."}
            rows={"1"}
            setText={setUser}
          />
        </ColumnBox>
        <ColumnBox>
          <RowBox>
            <TextArea
              label={"Nombre"}
              placeholder={"Pedro..."}
              rows={"1"}
              setText={setName}
            />
            <TextArea
              label={"Apellido"}
              placeholder={"Rodriguez..."}
              rows={"1"}
              setText={setLastname}
            />
          </RowBox>
          <RowBox>
            <MyDate label={"Fecha de Nacimiento"} setDate={setBirthdate} />
            <Select
              label={"Genero"}
              values={["Hombre", "Mujer", "Prefiero no decir"]}
              setSelect={setGender}
            />
          </RowBox>
        </ColumnBox>
        <ColumnBox>
          <RowBox>
            <Password
              label={"Contraseña"}
              placeholder={"***************"}
              setPassword={setPassword1}
            />
            <Password
              label={"Repetir Contraseña"}
              placeholder={"***************"}
              setPassword={setPassword2}
            />
          </RowBox>
        </ColumnBox>
        <BottonBox>
          <SBotton onClick={onCancel}>Cancelar</SBotton>
          <PBotton onClick={onSubmit}>Crear Cuenta</PBotton>
        </BottonBox>
      </MainBox>
    </Layout>
  );
}

export default Singup;

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(400px - 30px);
  box-shadow: 0px 4px 10px 0px var(--black);
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  border-radius: 21px;
  gap: 30px;
  padding: 15px;
  justify-content: space-between;
`;

export const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  height: min-content;
  width: 100%;
  gap: 10px;
  align-items: center;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  height: min-content;
  width: 100%;
  gap: 10px;
`;
