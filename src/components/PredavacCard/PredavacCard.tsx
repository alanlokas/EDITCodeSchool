import React from "react";
import "./PredavacCard.css";
import Avatar from "../../assets/img_avatar.png";
import { useContext } from "react";
import UserContext from "../../context/userContext";
import { Link } from "react-router-dom";

export default function PredavacCard({
  id,
  predavac,
  bio,
  organizacija,
  teme,
}) {
  const [user, setUser] = useContext(UserContext);
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
          {teme.join(", ")}
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
