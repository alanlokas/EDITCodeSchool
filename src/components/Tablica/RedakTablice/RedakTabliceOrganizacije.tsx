import "./RedakTabliceOrganizacije.css";

interface Organizacija {
  ime: string;
  broj_prijava: number;
  datum: string;
}

interface Props {
  organizacije: Organizacija;
}

function RedakTabliceOrganizacije(props: Props) {
  const { organizacije } = props;
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
    </tr>
  );
}

export default RedakTabliceOrganizacije;
