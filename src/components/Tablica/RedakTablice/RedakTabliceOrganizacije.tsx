import "./RedakTabliceOrganizacije.css";

function RedakTabliceOrganizacije({ organizacije }) {
  return (
    <tr className="redak">
      <td>{organizacije.ime}</td>
      <td>{organizacije.broj_prijava}</td>
      <td>{organizacije.datum}</td>
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

export default RedakTabliceOrganizacije;
