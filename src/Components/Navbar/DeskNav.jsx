import React from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/generalStyles.css";
import "./navStyles.css";
import styled from "styled-components";
import { SBotton, TBotton } from "../Bottons";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";

function DeskNav({ titles }) {
  const { isLogin, setIsLogin } = React.useContext(Context);

  const navigate = useNavigate();

  const redirecionar = (dirección) => navigate(dirección);

  const logOut = () => {
    setIsLogin(false);
    redirecionar("/Tanoha/home");
  };
  const logIn = () => {
    redirecionar("/Tanoha/login");
  };

  return (
    <Nav>
      <DeskMenu>
        {titles.map((t) => (
          <NavLink
            to={t.route}
            key={t.label}
            className={({ isActive }) =>
              isActive ? "itemSelected miniText" : "miniText"
            }
          >
            <div className="item miniText">{t.label}</div>
          </NavLink>
        ))}
      </DeskMenu>
      {isLogin ? (
        <SBotton onClick={logOut}>Salir</SBotton>
      ) : (
        <TBotton onClick={logIn}>Ingresar</TBotton>
      )}
    </Nav>
  );
}

export { DeskNav };

export const Nav = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DeskMenu = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: var(--secondary-main);
`;
