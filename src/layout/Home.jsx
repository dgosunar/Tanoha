import styled from "styled-components";
import { Navbar } from "../Components/Navbar";
import { BbHome } from "../Components/Backgrounds/BgHome";

function Layout({ children }) {
  return (
    <MainContainer>
      <Navbar />
      <Container>
        <div className="content">{children}</div>
      </Container>
      <BbHome />
    </MainContainer>
  );
}

export { Layout };

export const MainContainer = styled.div`
  height: calc(100% - 20px);
  width: calc(100% - 240px);
  padding: 10px 120px;

  @media screen and (max-width: 1024px) {
    width: calc(100% - 120px);
    padding: 10px 60px;
  }

  @media screen and (max-width: 768px) {
    width: calc(100% - 60px);
    padding: 10px 30px;
  }

  @media screen and (max-width: 600px) {
    width: calc(100% - 20px);
    padding: 10px 10px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: flex-start;
  height: calc(100% - 50px);
  color: var(--white);
  overflow-y: auto;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 600px) {
    padding: 60px 15px 15px 15px;
  }

  .presentation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    max-height: 50px;
    gap: 20px;
  }

  .content {
    display: flex;
    width: 100%;
    height: calc(100% - 60px);
    justify-content: center;
  }
`;
