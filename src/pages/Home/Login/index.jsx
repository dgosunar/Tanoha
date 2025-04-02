import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../../Layout";
import { BottonBox, PBotton, SBotton } from "../../../Components/Bottons";
import { Context } from "../../../Context";
import Password from "../../../Components/Inputs/Password";
import TextArea from "../../../Components/Inputs/TextArea";

import User from "../../../Assets/Usuario.png";

function Login() {
  const { setIsLogin } = React.useContext(Context);

  const navigate = useNavigate();
  const redirecionar = (dirección) => navigate(dirección);

  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  const logIn = () => {
    // VALIDACIÓN DE CREDENCIALES
    // addProfile(user, name, lastname, birthdate, gender, password);
    setIsLogin(true);
    redirecionar("/Tanoha/summary");
  };

  const signup = () => {
    redirecionar("/Tanoha/singup");
  };

  return (
    <Layout>
      <MainBox>
        <img
          src={User}
          alt="Descripción de la imagen"
          width="150"
          height="150"
        />
        <ColumnBox>
          <TextArea
            label={"Usuario"}
            placeholder={"Pedro_Rodriguez..."}
            rows={"1"}
            setText={setUser}
          />
        </ColumnBox>
        <ColumnBox>
          <Password
            label={"Contraseña"}
            placeholder={"***************"}
            rows={"1"}
            setPassword={setPassword}
          />
        </ColumnBox>
        <BottonBox>
          <SBotton onClick={signup}>Registrase</SBotton>
          <PBotton onClick={logIn}>Ingresar</PBotton>
        </BottonBox>
      </MainBox>
    </Layout>
  );
}

export default Login;

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
