import styled from "styled-components";
import { Layout } from ".";
import { Separator } from "../Components/Modals/Separator";

function Dash({ children, title, description }) {
  return (
    <Layout>
      <DashContainer>
        <Title className="primaryTitle">{title}</Title>
        <Separator />
        <Content>{children}</Content>
      </DashContainer>
    </Layout>
  );
}

export { Dash };

export const DashContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  color: var(--white);
  overflow: hidden;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 768px) {
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: 50px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100% - 51px);
  justify-content: center;
  overflow: auto;
`;
