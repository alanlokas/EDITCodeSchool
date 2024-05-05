import { useState, useEffect } from "react";
import "./Radionice.css";
import RadionicaCard from "../../components/RadionicaCard/RadionicaCard";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
import Sidebar from "../../components/Sidebar/Sidebar";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export default function Radionice() {
  const [radionice, setRadionice] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "http://localhost:3001/radionice";
        const response = await axios.get(url);
        let filteredRadionice = response.data;

        // Provjeri postoji li parametar tezina u search params
        const tezina = searchParams.get("tezina");
        if (tezina) {
          filteredRadionice = filteredRadionice.filter(
            (radionica) => radionica.tezina === tezina
          );
        }

        // Provjeri postoji li parametar teme u search params
        const teme = searchParams.get("teme");
        if (teme) {
          filteredRadionice = filteredRadionice.filter((radionica) =>
            radionica.teme.includes(teme)
          );
        }

        setRadionice(filteredRadionice);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <div>
      <Nav />
      <Menu natpis={"+ Dodaj novu radionicu"} />
      <div className="content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="radionice">
          {radionice.map((radionica) => (
            <RadionicaCard
              key={radionica.id}
              id={radionica.id}
              ime={radionica.ime}
              datum={radionica.datum}
              predavac={radionica.predavac}
              opis={radionica.opis}
              tezina={radionica.tezina}
              teme={radionica.teme}
              broj_prijava={radionica.broj_prijava}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

// import "./Radionice.css";
// import Radionica from "../../components/Radionica/Radionica";
// import Nav from "../../components/Nav/Nav";
// import Footer from "../../components/Footer/Footer";
// import Menu from "../../components/Menu/Menu";
// import Sidebar from "../../components/Sidebar/Sidebar";
// import { useContext } from "react";
// import UserContext from "../../context/userContext";

// export default function Radionice() {
//   const [user, setUser] = useContext(UserContext);
//   return (
//     <div>
//       <Nav />
//       <Menu natpis={"+ Dodaj novu radionicu"} />
//       <div className="content">
//         <div className="sidebar">
//           <Sidebar />
//         </div>
//         <div className="radionice">
//           <Radionica />
//           <Radionica />
//           <Radionica />
//           <Radionica />
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }
