import React from "react";
import styled from "styled-components";
import { PBotton } from "../Components/Bottons";
import { useNavigate } from "react-router-dom";
import { Context } from "../Context";
import { Layout } from "../layout";

function Home() {
  const { setIsLogin } = React.useContext(Context);
  const navigate = useNavigate();

  const redirecionar = (dirección) => navigate(dirección);

  const logIn = () => {
    setIsLogin(true);
    redirecionar("/Tanoha/summary");
  };

  return (
    <Layout>
      <Container>
        <LogoBox>
          <img src="./Logos/CompletLogoLight.png" alt="imagotipo" />
          <div className="secondarySubtitle">
            Gestiona tus tareas, conquista tus metas
          </div>
          <div className="secondarySubtitle">
            Pequeños hábitos, grandes victorias
          </div>
        </LogoBox>
        <PBotton onClick={logIn}>Ingresar</PBotton>
        <div style={{ margin: "17px" }}></div>
      </Container>
    </Layout>
  );
}

export default Home;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
  text-align: center;
`;
