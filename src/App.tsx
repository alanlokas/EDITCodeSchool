import { useState, useEffect } from "react";
import Predavaci from "./pages/Predavaci/Predavaci";
import Predavac from "./pages/Predavac/Predavac";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Radionice from "./pages/Radionice/Radionice";
import Radionica from "./pages/Radionica/Radionica";
import Administracija from "./pages/Administracija/Administracija";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import UserContext from "./context/userContext";
import axios from "axios";

function App() {
  const [user, setUser] = useState("Korisnik");
  const [organizacije, setOrganizacije] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/organizacije/")
      .then((res) => setOrganizacije(res.data)); //kad podaci dođu šta raditi
    console.log(organizacije);
    console.log(user);
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/predavaci" element={<Predavaci />} />
        <Route
          path="/predavaci?organizacija=:organizacija"
          element={<Predavaci />}
        />
        <Route path="/predavaci?teme=:teme" element={<Predavaci />} />
        <Route path="/predavaci/:id" element={<Predavac />} />
        <Route path="/predavaci/?radnja:radnja" element={<Predavac />} />

        <Route path="/radionice" element={<Radionice />} />
        <Route path="/radionice?teme=:teme" element={<Radionice />} />
        <Route path="/radionice?tezina=:tezina" element={<Radionice />} />
        <Route path="/radionice/:id" element={<Radionica />} />

        <Route path="/administracija" element={<Administracija />} />
        <Route path="/administracija?meni=:meni" element={<Administracija />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
