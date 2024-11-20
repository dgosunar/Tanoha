import React from "react";
import { Layout } from "../../layout/Home";
import styled from "styled-components";
import "./../../Styles/index.css";
import { PBotton } from "../../Components/Bottons";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const redi = () => navigate("/Tanoha/");
  return (
    <Layout>
      <Container>
        <div className="primaryTitle">Pagina No Encontrada</div>
        <PBotton onClick={redi}>Volver</PBotton>
        <img
          src="./Images/404 error with person looking for-bro.png"
          alt="image404"
        />
        <a
          href="https://storyset.com/online"
          target="_blank"
          rel="noopener noreferrer"
        >
          Online illustrations by Storyset
        </a>
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
