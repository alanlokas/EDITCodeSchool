import { useState, useEffect } from "react";
import "./Predavaci.css";
import PredavacCard from "../../components/PredavacCard/PredavacCard";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export default function Predavaci() {
  const [predavaci, setPredavaci] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "http://localhost:3001/predavaci";
        const response = await axios.get(url);
        let filteredPredavaci = response.data;

        // Provjeri postoji li parametar organizacija u search params
        const organizacija = searchParams.get("organizacija");
        if (organizacija) {
          filteredPredavaci = filteredPredavaci.filter(
            (predavac) => predavac.organizacija === organizacija
          );
        }

        // Provjeri postoji li parametar teme u search params
        const teme = searchParams.get("teme");
        if (teme) {
          filteredPredavaci = filteredPredavaci.filter((predavac) =>
            predavac.teme.includes(teme)
          );
        }

        setPredavaci(filteredPredavaci);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <div>
      <Nav />
      <Menu natpis={"+ Dodaj novog predavača"} />
      <div className="content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="predavaci">
          {predavaci.map((predavac) => (
            <PredavacCard
              key={predavac.id}
              id={predavac.id}
              predavac={predavac.ime}
              bio={predavac.bio}
              organizacija={predavac.organizacija}
              teme={predavac.teme}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
