import { useContext, useState, useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext";
import Nav from "../../components/Nav/Nav";
import Menu from "../../components/Menu/Menu";
import axios from "axios";
import Modal from "react-modal";
import "./Predavac.css";

interface Predavac {
  id: string;
  ime: string;
  bio: string;
  organizacija: string;
  teme: string[];
}

interface Organizacija {
  id: string;
  ime: string;
}

interface Tema {
  id: string;
  ime: string;
}

export default function Predavac() {
  const [user, setUser] = useContext(UserContext);
  const { id } = useParams<{ id: string }>();
  const [predavac, setPredavac] = useState<Predavac>({
    id: "",
    ime: "",
    bio: "",
    organizacija: "",
    teme: [],
  });
  const [organizacije, setOrganizacije] = useState<Organizacija[]>([]);
  const [sveTeme, setSveTeme] = useState<Tema[]>([]);
  const [novaTema, setNovaTema] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const radnja = searchParams.get("radnja");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [predavacResponse, organizacijeResponse, temeResponse] =
          await Promise.all([
            axios.get<Predavac>(`http://localhost:3001/predavaci/${id}`),
            axios.get<Organizacija[]>("http://localhost:3001/organizacije"),
            axios.get<Tema[]>("http://localhost:3001/teme"),
          ]);
        setPredavac(predavacResponse.data);
        setOrganizacije(organizacijeResponse.data);
        setSveTeme(temeResponse.data);
      } catch (error) {
        console.error("Greška prilikom dohvata podataka: ", error);
      }
    };
    fetchData();
  }, [id]);

  const promjenaUlaza = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPredavac((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const dodajTemu = (temaId: string) => {
    if (temaId !== "") {
      if (!predavac.teme.includes(temaId)) {
        setPredavac((prevState) => ({
          ...prevState,
          teme: [...prevState.teme, temaId],
        }));
      } else {
        alert("Ova tema je već dodana predavaču!");
      }
    }
  };

  const ukloniTemu = (temaId: string) => {
    setPredavac((prevState) => ({
      ...prevState,
      teme: prevState.teme.filter((tema) => tema !== temaId),
    }));
  };

  const snimiPodatke = async () => {
    try {
      await axios.put(`http://localhost:3001/predavaci/${id}`, predavac);
      alert("Podaci su uspješno ažurirani!");
      setShowModal(false);
      navigate("/predavaci"); // Navigacija na stranicu Predavači
    } catch (error) {
      console.error("Greška prilikom snimanja podataka: ", error);
    }
  };

  const handleBack = () => {
    setShowModal(true);
  };

  const handleConfirm = () => {
    snimiPodatke();
  };

  const handleCancel = () => {
    setShowModal(false);
    navigate("/predavaci"); // Navigacija na stranicu Predavači
  };

  return (
    <div>
      <Nav />
      {user === "Admin" && <Menu natpis={"+ Dodaj novog predavača"} />}

      <div className="content">
        <div className="predavac-edit">
          <div>ID: {predavac.id}</div>
          {radnja === "edit" && (
            <>
              <div>
                Ime:
                <input
                  type="text"
                  name="ime"
                  value={predavac.ime || ""}
                  onChange={promjenaUlaza}
                  required
                />
              </div>
              <div>
                Bio:
                <input
                  type="text"
                  name="bio"
                  value={predavac.bio || ""}
                  onChange={promjenaUlaza}
                  required
                />
              </div>
              <div>
                Organizacija:
                <select
                  name="organizacija"
                  value={predavac.organizacija || ""}
                  onChange={promjenaUlaza}
                  required
                >
                  <option value="">--Odaberi organizaciju--</option>
                  {organizacije.map((organizacija) => (
                    <option key={organizacija.id} value={organizacija.ime}>
                      {organizacija.ime}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                Teme:
                <div>
                  {predavac.teme &&
                    predavac.teme.map((tema) => (
                      <table key={tema}>
                        <tbody>
                          <tr>
                            <td>{tema}</td>
                            <td onClick={() => ukloniTemu(tema)}>
                              <b>x</b>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    ))}
                </div>
                <select
                  value={novaTema}
                  onChange={(e) => setNovaTema(e.target.value)}
                >
                  <option value="">--Odaberi temu--</option>
                  {sveTeme.map((tema) => (
                    <option key={tema.id} value={tema.ime}>
                      {tema.ime}
                    </option>
                  ))}
                </select>
                <button onClick={() => dodajTemu(novaTema)}>Dodaj</button>
              </div>
            </>
          )}
          {radnja === "view" && (
            <>
              <div>Ime i prezime: {predavac.ime}</div>
              <div>Bio: {predavac.bio}</div>
              <div>Organizacija: {predavac.organizacija}</div>
              <div>Teme: {predavac.tema}</div>
            </>
          )}
          {radnja === "novi" && (
            <>
              <div>
                Ime:
                <input
                  type="text"
                  name="ime"
                  value={predavac.ime || ""}
                  onChange={promjenaUlaza}
                  required
                />
              </div>
              <div>
                Bio:
                <input
                  type="text"
                  name="bio"
                  value={predavac.bio || ""}
                  onChange={promjenaUlaza}
                  required
                />
              </div>
              <div>
                Organizacija:
                <select
                  name="organizacija"
                  value={predavac.organizacija || ""}
                  onChange={promjenaUlaza}
                  required
                >
                  <option value="">--Odaberi organizaciju--</option>
                  {organizacije.map((organizacija) => (
                    <option key={organizacija.id} value={organizacija.ime}>
                      {organizacija.ime}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                Teme:
                <div>
                  {predavac.teme &&
                    predavac.teme.map((tema) => (
                      <table key={tema}>
                        <tbody>
                          <tr>
                            <td>{tema}</td>
                            <td onClick={() => ukloniTemu(tema)}>
                              <b>x</b>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    ))}
                </div>
                <select
                  value={novaTema}
                  onChange={(e) => setNovaTema(e.target.value)}
                >
                  <option value="">--Odaberi temu--</option>
                  {sveTeme.map((tema) => (
                    <option key={tema.id} value={tema.ime}>
                      {tema.ime}
                    </option>
                  ))}
                </select>
                <button onClick={() => dodajTemu(novaTema)}>Dodaj</button>
              </div>
            </>
          )}
        </div>
      </div>

      {user === "Admin" ? (
        <>
          <button type="submit" onClick={snimiPodatke}>
            Snimi
          </button>
          <button onClick={handleBack}>Nazad</button>
          <Modal isOpen={showModal}>
            <div>
              <p>Želite li spremiti promjene prije povratka?</p>
              <button onClick={handleConfirm}>Da</button>
              <button onClick={handleCancel}>Ne</button>
            </div>
          </Modal>
        </>
      ) : (
        <>
          <button onClick={handleCancel}>Nazad</button>
        </>
      )}
    </div>
  );
}
