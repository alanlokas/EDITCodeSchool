import { useState } from "react";
import "./ToggleButton.css";
import { useContext } from "react";
import UserContext from "../../context/userContext";

export default function ToggleButton() {
  const [toggleButton, setToggleButton] = useState(true);
  const [user, setUser] = useContext(UserContext);

  const handleClick = () => {
    setToggleButton(!toggleButton);
    console.log(toggleButton);
    {
      toggleButton ? setUser("Admin") : setUser("Korisnik");
    }
  };

  return (
    <div>
      <div onClick={handleClick} className="toggle">
        {toggleButton ? (
          <div className="toggle-left"></div>
        ) : (
          <div className="toggle-right"></div>
        )}
      </div>
    </div>
  );
}
