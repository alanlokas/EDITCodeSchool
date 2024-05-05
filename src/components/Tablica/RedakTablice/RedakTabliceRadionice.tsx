import "./RedakTabliceRadionice.css";

function RedakTabliceRadionice({ radionice }) {
  return (
    <tr className="redak">
      <td>{radionice.ime}</td>
      <td>{radionice.broj_prijava}</td>
      <td>{radionice.datum}</td>
      <td>
        <button>Obriši</button>
      </td>
      <td>
        <button>Uredi</button>
      </td>
      {/* <button onClick={() => obrisiRezervacije(rez.id)}>Obriši</button> */}
    </tr>
  );
}

export default RedakTabliceRadionice;
