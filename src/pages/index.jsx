import React from "react";
import styled from "styled-components";
import { Layout } from "../layout/Home";
import { PBotton } from "../Components/Bottons";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";

function Home() {
  const { setIsLogin } = React.useContext(Context);
  const navigate = useNavigate();

  const redirecionar = (dirección) => navigate(dirección);

  const logIn = () => {
    setIsLogin(true);
    redirecionar("/Task_Habits/summary");
  };

  return (
    <Layout>
      <Container>
        <LogoBox>
          <img src="./Logos/CompletLogo_light.png" alt="imagotipo" />
          <div className="se  condarySubtitle">
            Gestiona tus tareas, conquista tus metas
          </div>
          <div className="secondarySubtitle">
            Pequeños hábitos, grandes victorias
          </div>
          <div style={{ margin: "20px" }}></div>
          <PBotton onClick={logIn}>Ingresar</PBotton>
        </LogoBox>
      </Container>
    </Layout>
  );
}

export default Home;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 50%;

  @media screen and (max-width: 768px) {
    height: 50%;
    width: 100%;
  }
`;
