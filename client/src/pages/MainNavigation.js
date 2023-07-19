import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <nav className={`${classes.nav} row`}>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/userprofile">My Profile</NavLink>{" "}
    </nav>
  );
}

export default MainNavigation;
