import React from "react";
import styled from "styled-components";
import "./../../Styles/index.css";
import { PBotton } from "../../Components/Bottons";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../Layout";

import Error404 from "../../Assets/404.png";

function NotFound() {
  const navigate = useNavigate();
  const redi = () => navigate("/Tanoha/home");
  return (
    <Layout>
      <Container>
        <img
          style={{ filter: "drop-shadow(5px 5px 10px black)", height: "300px" }}
          src={Error404}
          alt="Error404"
        />
        <PBotton onClick={redi}>Volver</PBotton>
      </Container>
    </Layout>
  );
}

export default NotFound;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 80%;
  width: 100%;
  gap: 20px;

  img {
    height: 50vh;
  }
`;
