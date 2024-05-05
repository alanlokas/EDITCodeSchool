import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import ToggleButton from "../ToggleButton/ToggleButton";
import { useContext } from "react";
import UserContext from "../../context/userContext";
import Logo from "../Logo/Logo";

export default function Nav() {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="navigation">
      <div>
        <Logo />
      </div>
      <div className="meni">
        <Link to="/">Naslovnica</Link>
        <Link to="/radionice">Radionice</Link>
        <Link to="/predavaci">Predavači</Link>
        {user === "Admin" && (
          <Link to="/administracija?meni=radionice">Administracija</Link>
        )}
      </div>
      <div className="role">
        <ToggleButton />
        {user}
      </div>
    </div>
  );
}
