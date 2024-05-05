import RedakTabliceRadionice from "../RedakTablice/RedakTabliceRadionice";

interface Radionica {
  id: string;
  ime: string;
  broj_prijavnica: number;
  datum: string;
}

interface Props {
  radionice: Radionica[];
}

const TablicaRadionice = ({ radionice }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Ime</th>
          <th>Broj prijava</th>
          <th>Datum</th>
        </tr>
      </thead>
      <tbody>
        {radionice.map((radionice) => (
          <RedakTabliceRadionice
            key={radionice.id}
            radionice={radionice}
            // obrisiRadionicu={obrisiRadionicu}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TablicaRadionice;
