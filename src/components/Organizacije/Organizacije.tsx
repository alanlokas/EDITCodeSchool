import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Organizacije.css";

export default function Organizacije() {
  const [organizacije, setOrganizacije] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/organizacije/")
      .then((res) => setOrganizacije(res.data)); //kad podaci dođu šta raditi
    console.log(organizacije);
  }, []);
  return (
    <div className="organizacije">
      <h4>Organizacije</h4>
      <ul>
        {organizacije.map((organizacija, id) => (
          <li key={organizacija.id}>
            <Link to={`/predavaci?organizacija=${organizacija.ime}`}>
              {organizacija.ime}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
