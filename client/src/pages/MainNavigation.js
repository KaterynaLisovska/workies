import { NavLink } from "react-router-dom";

import "../App.css";

function MainNavigation() {
  return (
    <nav>
      <ul className="row">
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/userprofile">My Profile</NavLink>
      </ul>
    </nav>
  );
}

export default MainNavigation;
