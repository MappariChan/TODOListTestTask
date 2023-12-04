import { useState } from "react";
import { NavLink } from "react-router-dom";
import { createPortal } from "react-dom";

import AddTodoModal from "../AddTodoModal/AddTodoModal";

import classes from "./NavBar.module.css";

const NavBar = () => {
  const [isModalOppened, setModalOppened] = useState(false);

  return (
    <>
      <nav className={classes.navigation}>
        <ul>
          <li onClick={() => setModalOppened(true)}>Add TODO</li>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? classes.active : "")}
            >
              TODO List
            </NavLink>
          </li>
        </ul>
      </nav>
      {isModalOppened &&
        createPortal(
          <AddTodoModal onClose={() => setModalOppened(false)} />,
          document.getElementById("modal")
        )}
    </>
  );
};

export default NavBar;
