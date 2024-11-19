import styled from "styled-components";

function BbHome() {
  return (
    <Fondo>
      <img src="./Fondos/Fondo1.jpg" alt="imagotipo"/>
    </Fondo>
  );
}

export { BbHome };

export const Fondo = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -1;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    z-index: -1; 
  }
`;
