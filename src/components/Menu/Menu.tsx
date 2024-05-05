import "./Menu.css";
import { useContext } from "react";
import UserContext from "../../context/userContext";
import { Link } from "react-router-dom";

interface MenuProps {
  natpis: string;
}

const Menu = ({ natpis }: MenuProps) => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="admin">
      {user === "Admin" && (
        <Link to={`/predavaci/9999?radnja=novi`}>
          <button>{natpis}</button>
        </Link>
      )}
    </div>
  );
};

export default Menu;
