import React from "react";
import styled from "styled-components";
import ContactCard from "./ContactCard";
import { Layout } from "../../../layout";

function Contact() {
  return (
    <Layout>
      <Container>
        <ContactCard title="Contacto" />
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
