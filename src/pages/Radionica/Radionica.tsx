import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Radionica.css";
import Nav from "../../components/Nav/Nav";

interface Radionica {
  id: string;
  ime: string;
  datum: string;
  predavac: string;
  opis: string;
  tezina: string;
  teme: string[];
  broj_prijava: number;
}

export default function Radionica() {
  const [radionica, setRadionica] = useState<Radionica | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    let url = `http://localhost:3001/radionice/${id}`;
    axios
      .get(url)
      .then((res) => setRadionica(res.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, [id]);

  if (!radionica) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Nav />
      <div>
        <div>ID: {radionica.id}</div>
        <div>
          Naziv radionice:
          <h2>
            <b>{radionica.ime}</b>
          </h2>
        </div>
        <div>Datum: {radionica.datum}</div>
        <div>Predavač: {radionica.predavac}</div>
        <div>Opis: {radionica.opis}</div>
        <div>Težina: {radionica.tezina}</div>
        <div>Teme: {radionica.teme}</div>
        <div>Broj prijava: {radionica.broj_prijava}</div>
      </div>
    </div>
  );
}
