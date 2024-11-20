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
    redirecionar("/Tanoha/");
  };
  const logIn = () => {
    setIsLogin(true);
    redirecionar("/Tanoha/summary");
  };

  return (
    <Nav>
      <div className="deskMenu">
        {titles.map((t) => (
          <NavLink
            to={t.route}
            key={t.label}
            className={({ isActive }) =>
              isActive ? "itemSelected miniText" : "miniText"
            }
          >
            <div className="item">{t.label}</div>
          </NavLink>
        ))}
      </div>
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
