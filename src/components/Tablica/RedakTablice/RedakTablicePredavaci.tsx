import "./RedakTablicePredavaci.css";

interface Predavac {
  ime: string;
}

interface Props {
  predavaci: Predavac;
}

function RedakTablicePredavaci(props: Props) {
  const { predavaci } = props;
  return (
    <tr className="redak">
      <td>{predavaci.ime}</td>
      <td>
        <button>Obriši</button>
      </td>
      <td>
        <button>Uredi</button>
      </td>
    </tr>
  );
}

export default RedakTablicePredavaci;
