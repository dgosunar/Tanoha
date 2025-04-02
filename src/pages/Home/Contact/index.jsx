import React from "react";
import styled from "styled-components";

import { Layout } from "../../../Layout";
import DGOsunaR from "../../../Assets/DGOsunaR.png";
import { Separator } from "../../../Components/Modals/Separator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <Layout>
      <Container>
        <Card>
          <MyPresentation>
            <img
              style={{
                width: "100px",
              }}
              src={DGOsunaR}
              alt="DGOsunaR"
            />
            <span className="primaryTitle">Daniel Osuna</span>
            <span className="primarySubtitle">Desarrollador Frontend</span>
            <Separator />
            <span className="mediumText">React | JavaScript | Astro</span>
            <span className="mediumText">dgosunar@gmail.com</span>
            <SocialNetworks>
              <a
                href="https://github.com/dgosunar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/daniel-osuna-r/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </a>
            </SocialNetworks>
          </MyPresentation>
        </Card>
      </Container>
    </Layout>
  );
}

export default Contact;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  padding: 10px;
  border-radius: 21px;
  background-color: rgba(255, 255, 255, 0.6);
  box-shadow: 0px 4px 10px 0px var(--black);
  backdrop-filter: blur(4px);
  color: var(--primary-main);

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const MyPresentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 768px) {
  }
`;

export const SocialNetworks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 768px) {
  }
`;
