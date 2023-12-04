import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";

import classes from "./RootLayout.module.css";

const RootLayout = () => {
  return (
    <div className={classes.layout}>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
