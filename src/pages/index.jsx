import React from "react";
import styled from "styled-components";
import { BottonBox, SBotton, TBotton } from "../Components/Bottons";
import { useNavigate } from "react-router-dom";
import { Layout } from "../layout";

function Home() {
  const navigate = useNavigate();

  const redirecionar = (dirección) => navigate(dirección);

  const logIn = () => {
    redirecionar("/Tanoha/login");
  };
  const singUp = () => {
    redirecionar("/Tanoha/singup");
  };

  return (
    <Layout>
      <Container>
        <LogoBox>
          <img
            style={{ filter: "drop-shadow(5px 5px 10px black)" }}
            src="./Logos/CompletLogoLight.png"
            alt="imagotipo"
          />
          <div className="secondarySubtitle">
            Gestiona tus tareas, conquista tus metas
          </div>
          <div className="secondarySubtitle">
            Pequeños hábitos, grandes victorias
          </div>
        </LogoBox>
        <BottonBox style={{ filter: "drop-shadow(5px 5px 10px black)" }}>
          <TBotton onClick={logIn}>Ingresar</TBotton>
          <SBotton onClick={singUp}>Registrase</SBotton>
        </BottonBox>
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
  gap: 10px;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 1);
`;
