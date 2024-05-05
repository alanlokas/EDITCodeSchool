import "./Sidebar.css";
import Organizacije from "../Organizacije/Organizacije";
import Teme from "../Teme/Teme";
import Tezine from "../Tezine/Tezine";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const lokacija = useLocation();
  return (
    <div className="sidebar-menu">
      <div>
        <Teme />
      </div>
      {lokacija.pathname === "/predavaci" && (
        <div>
          <Organizacije />
        </div>
      )}
      {lokacija.pathname === "/radionice" && (
        <div>
          <Tezine />
        </div>
      )}
    </div>
  );
}
