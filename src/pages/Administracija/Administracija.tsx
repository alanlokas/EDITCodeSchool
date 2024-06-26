import "./Administracija.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/userContext";
import TablicaRadionice from "../../components/Tablica/Tablica/TablicaRadionice";
import TablicaOrganizacije from "../../components/Tablica/Tablica/TablicaOrganizacije";
import TablicaPredavaci from "../../components/Tablica/Tablica/TablicaPredavaci";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

export default function Administracija() {
  const [user, setUser] = useContext(UserContext);
  const [searchParams] = useSearchParams();
  const meni = searchParams.get("meni");

  const [radionice, setRadionice] = useState([]);
  const [organizacije, setOrganizacije] = useState([]);
  const [predavaci, setPredavaci] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/radionice/")
      .then((res1) => setRadionice(res1.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/organizacije/")
      .then((res2) => setOrganizacije(res2.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/predavaci/")
      .then((res3) => setPredavaci(res3.data));
  }, []);

  return (
    <div>
      <Nav />
      {user === "Admin" && (
        <>
          <div className="admin-content">
            <div className="admin-meni">
              <ul>
                <li>
                  <Link to={`/administracija?meni=radionice`}>Radionice</Link>
                </li>
                <li>
                  <Link to={`/administracija?meni=organizacije`}>
                    Organizacije
                  </Link>
                </li>
                <li>
                  <Link to={`/administracija?meni=predavaci`}>Predavači</Link>
                </li>
              </ul>
            </div>
            {meni === "radionice" && (
              <div>
                Radionice
                <TablicaRadionice
                  radionice={radionice}
                  // obrisiRadionicu={obrisiRadionicu}
                />
              </div>
            )}
            {meni === "organizacije" && (
              <div>
                Organizacije
                <TablicaOrganizacije
                  organizacije={organizacije}
                  // obrisiOrganizaciju={obrisiOrganizaciju}
                />
              </div>
            )}
            {meni === "predavaci" && (
              <div>
                Predavači
                <TablicaPredavaci
                  predavaci={predavaci}
                  // obrisiPredavaca={obrisiPredavaca}
                />
              </div>
            )}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}
