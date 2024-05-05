import "./PredavacCard.css";
import Avatar from "../../assets/img_avatar.png";
import { useContext } from "react";
import UserContext from "../../context/userContext";
import { Link } from "react-router-dom";

interface PredavacCardProps {
  id: number;
  predavac: string;
  bio: string;
  organizacija: string;
  teme: string;
}

export default function PredavacCard({
  id,
  predavac,
  bio,
  organizacija,
  teme,
}: PredavacCardProps) {
  const [user, setUser] = useContext(UserContext);

  const temaArray =
    typeof teme === "string"
      ? teme.split(",").map((item) => item.trim())
      : teme;

  return (
    <div className="predavac">
      <img src={Avatar} alt="Avatar" style={{ width: "33%" }} />
      <div className="container">
        <h4>
          <b>{predavac}</b>
        </h4>
        <p>
          <b>bio: </b>
          {bio}
        </p>
        <p>
          <b>organizacija: </b>
          {organizacija}
        </p>
        <p>
          <b>Teme: </b>
          {temaArray.join(", ")}
        </p>
      </div>
      <Link to={`/predavaci/${id}?radnja=view`}>
        <button>Pogledaj predavača</button>
      </Link>
      {user === "Admin" && (
        <Link to={`/predavaci/${id}?radnja=edit`}>
          <button>Uredi</button>
        </Link>
      )}
    </div>
  );
}
