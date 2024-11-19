import styled from "styled-components";

function BgDashboard() {
  return (
    <Fondo>
      <img src="./Fondos/Fondo2.jpg" alt="imagotipo"/>
    </Fondo>
  );
}

export { BgDashboard };

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
