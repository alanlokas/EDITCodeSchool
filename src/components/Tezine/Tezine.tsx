import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Tezine.css";

interface Tezina {
  id: string;
  ime: string;
}

export default function Tezine() {
  const [tezine, setTezine] = useState<Tezina[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/tezine/")
      .then((res) => setTezine(res.data)); //kad podaci dođu šta raditi
    console.log(tezine);
  }, []);
  return (
    <div className="tezine">
      <h4>Težina</h4>
      <ul>
        {tezine.map((tezina) => (
          <li key={tezina.id}>
            <Link to={`/radionice?tezina=${tezina.ime}`}>{tezina.ime}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
