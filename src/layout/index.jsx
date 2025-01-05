import styled from "styled-components";
import { Navbar } from "../Components/Navbar";
import { BbHome } from "../Components/Backgrounds/BgHome";

function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      <Page>{children}</Page>
      <BbHome />
    </Container>
  );
}

export { Layout };

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 20px);
  width: calc(100% - 240px);
  padding: 10px 120px 10px 120px;
  gap: 10px;

  @media screen and (max-width: 1024px) {
    width: calc(100% - 120px);
    padding: 10px 60px 10px 60px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    width: calc(100% - 60px);
    padding: 10px 30px 10px 30px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    width: calc(100% - 20px);
    padding: 10px 10px 10px 10px;
  }
`;

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: calc(100% - 50px);
  overflow-y: auto;
`;
