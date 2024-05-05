import "./RedakTabliceRadionice.css";

interface Radionica {
  ime: string;
  broj_prijava: number;
  datum: string;
}

interface Props {
  radionice: Radionica;
}

function RedakTabliceRadionice(props: Props) {
  const { radionice } = props;
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
    </tr>
  );
}

export default RedakTabliceRadionice;
