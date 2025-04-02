import React from "react";
import { useRoutes, BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./Context";

import Home from "./pages/Home";
import Login from "./pages/Home/Login";
import Singup from "./pages/Home/Signup";
import About from "./pages/Home/About";
import Contact from "./pages/Home/Contact";
import Summary from "./pages/App/Summary";
import Tasks from "./pages/App/Tasks";
import Notes from "./pages/App/Notes";
import SpaceWork from "./pages/App/SpaceWork";
import Habits from "./pages/App/Habits";
import NotFound from "./pages/NotFound";
import NotFound2 from "./pages/NotFound2";

import "./Styles/App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/Tanoha/home", element: <Home /> },
    { path: "/Tanoha/login", element: <Login /> },
    { path: "/Tanoha/singup", element: <Singup /> },
    { path: "/Tanoha/about", element: <About /> },
    { path: "/Tanoha/contact", element: <Contact /> },
    { path: "/Tanoha/*", element: <NotFound /> },
    { path: "/*", element: <NotFound2 /> },
    { path: "/Tanoha/summary", element: <Summary /> },
    { path: "/Tanoha/tasks", element: <Tasks /> },
    { path: "/Tanoha/notes", element: <Notes /> },
    { path: "/Tanoha/space", element: <SpaceWork /> },
    { path: "/Tanoha/habits", element: <Habits /> },
  ]);
  return routes;
};

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
