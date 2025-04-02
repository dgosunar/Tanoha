import React from "react";
import "../../Styles/generalStyles.css";
import "./navStyles.css";
import { DeskNav } from "./DeskNav";
import { MobileNav } from "./MobileNav";
import { Context } from "../../Context";
import { DashNav } from "./DashNav";
import {
  faHouse,
  faSquareCheck,
  faNoteSticky,
  faClipboardList,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

const titlesOff = [
  { label: "Inicio", route: "/Tanoha/home" },
  { label: "Acerca de", route: "/Tanoha/about" },
  { label: "Contacto", route: "/Tanoha/contact" },
];
const titlesOn = [
  { label: "Resumen", route: "/Tanoha/summary", icon: faHouse },
  { label: "Tareas", route: "/Tanoha/tasks", icon: faSquareCheck },
  {
    label: "Espacios de Trabajo",
    route: "/Tanoha/space",
    icon: faLayerGroup,
  },
  { label: "Notas", route: "/Tanoha/notes", icon: faNoteSticky },
  { label: "Habitos", route: "/Tanoha/habits", icon: faClipboardList },
];

function Navbar() {
  const { isLogin } = React.useContext(Context);

  return (
    <>
      <div className={isLogin ? "header" : "noHeader"}>
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
