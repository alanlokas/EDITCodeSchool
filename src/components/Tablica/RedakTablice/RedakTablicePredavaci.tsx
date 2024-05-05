import "./RedakTablicePredavaci.css";

function RedakTablicePredavaci({ predavaci }) {
  return (
    <tr className="redak">
      <td>{predavaci.ime}</td>
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

export default RedakTablicePredavaci;
