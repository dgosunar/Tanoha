import React from "react";
import "../../Styles/generalStyles.css";
import "./navStyles.css";
import { DeskNav } from "./DeskNav";
import { MobileNav } from "./MobileNav";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";
import { DashNav } from "./DashNav";
import {
  faHouse,
  faSquareCheck,
  faNoteSticky,
  faClipboardList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const titlesOff = [
  { label: "Inicio", route: "/Tanoha/" },
  { label: "Contacto", route: "/Tanoha/contact" },
];
const titlesOn = [
  { label: "Resumen", route: "/Tanoha/summary", icon: faHouse },
  { label: "Tareas", route: "/Tanoha/tasks", icon: faSquareCheck },
  { label: "Notas", route: "/Tanoha/notes", icon: faNoteSticky },
  { label: "Habitos", route: "/Tanoha/habits", icon: faClipboardList },
  {
    label: "Perfil",
    route: "/Tanoha/space",
    icon: faUser,
  },
  // {
  //   label: "Espacios de Trabajo",
  //   route: "/Tanoha/space",
  //   icon: "faHouse",
  // },
];

function Navbar() {
  const { isLogin } = React.useContext(Context);

  const navigate = useNavigate();

  const redi = () =>
    isLogin ? navigate("/Tanoha/summary") : navigate("/Tanoha/");

  return (
    <>
      <div className="header">
        {isLogin ? (
          <>
            <DeskNav titles={titlesOn} />
            <DashNav titles={titlesOn} />
          </>
        ) : (
          <>
            <DeskNav titles={titlesOff} />
            <MobileNav titles={titlesOff} />
          </>
        )}
      </div>
    </>
  );
}

export { Navbar };
