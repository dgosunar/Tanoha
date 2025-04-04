import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Styles/generalStyles.css";
import "./navStyles.css";
import styled from "styled-components";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";

function DashNav({ titles }) {
  const { isLogin, setIsLogin } = React.useContext(Context);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();

  const redirecionar = (dirección) => navigate(dirección);

  const logOut = () => {
    setIsLogin(false);
    redirecionar("/Tanoha/home");
  };
  const logIn = () => {
    setIsLogin(true);
    redirecionar("/Tanoha/summary");
  };
  return (
    <Nav>
      <div className="dashMenu">
        <div className="dashItemList">
          {titles.map((t) => (
            <NavLink
              to={t.route}
              key={t.label}
              className={({ isActive }) =>
                isActive ? "dashItemSelected dashItem" : "dashItem"
              }
            >
              <FontAwesomeIcon icon={t.icon} size="xl" />
              <div className="miniText">{t.label}</div>
            </NavLink>
          ))}
        </div>
      </div>
    </Nav>
  );
}

export { DashNav };

export const Nav = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    height: 100%;
    width: 100%;
  }
`;
