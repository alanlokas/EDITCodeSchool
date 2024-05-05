import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "./Teme.css";

export default function Teme() {
  const [teme, setTeme] = useState([]);
  const lokacija = useLocation();

  useEffect(() => {
    axios.get("http://localhost:3001/teme/").then((res) => setTeme(res.data)); //kad podaci dođu šta raditi
  }, []);
  return (
    <div className="teme">
      <h4>Teme</h4>
      <ul>
        {teme.map((tema) => (
          <li key={tema.id}>
            {lokacija.pathname === "/predavaci" && (
              <Link to={`/predavaci?teme=${tema.ime}`}>{tema.ime}</Link>
            )}
            {lokacija.pathname === "/radionice" && (
              <Link to={`/radionice?teme=${tema.ime}`}>{tema.ime}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
