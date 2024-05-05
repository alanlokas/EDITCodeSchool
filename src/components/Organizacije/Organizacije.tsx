import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Organizacije.css";

export default function Organizacije() {
  const [organizacije, setOrganizacije] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/organizacije/")
      .then((res) => setOrganizacije(res.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  // Provjera da li su podaci stigli prije mapiranja
  if (organizacije.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="organizacije">
      <h4>Organizacije</h4>
      <ul>
        {organizacije.map((organizacija: any) => (
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
