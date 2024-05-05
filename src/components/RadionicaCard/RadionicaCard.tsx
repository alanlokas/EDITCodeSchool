import "./RadionicaCard.css";
import PHP from "../../assets/teme-php.png";
import { useContext } from "react";
import UserContext from "../../context/userContext";
import { Link } from "react-router-dom";

interface RadionicaCardProps {
  id: number;
  ime: string;
  datum: string;
  predavac: string;
  opis: string;
  tezina: string;
  teme: string;
  broj_prijava: number;
}

const RadionicaCard = ({
  id,
  ime,
  datum,
  predavac,
  opis,
  tezina,
  teme,
  broj_prijava,
}: RadionicaCardProps) => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="radionica">
      <div className="radionica-img">
        <img src={PHP} alt="Avatar" style={{ width: "100%" }} />
      </div>
      <div className="container">
        <h4>
          <b>{ime}</b>
        </h4>
        <p>
          <b>Datum: </b>
          {datum}
        </p>
        <p>
          <b>Predavač: </b>
          {predavac}
        </p>
        <p>
          <b>Opis: </b>
          {opis}
        </p>
        <p>
          <b>Težina: </b>
          {tezina}
        </p>
        <p>
          <b>Tema: </b>
          {teme}
        </p>
        <p>
          <b>Broj prijava: </b>
          {broj_prijava}
        </p>
        <Link to={`/radionice/${id}`}>
          <button>Pogledaj radionicu</button>
        </Link>
        {user === "Admin" && <button>Uredi</button>}
      </div>
    </div>
  );
};

export default RadionicaCard;
