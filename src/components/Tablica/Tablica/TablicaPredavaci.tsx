import RedakTablicePredavaci from "../RedakTablice/RedakTablicePredavaci";

interface Predavac {
  id: string;
  ime: string;
}

interface Props {
  predavaci: Predavac[];
}

function TablicaPredavaci(props: Props) {
  const { predavaci } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Ime</th>
        </tr>
      </thead>
      <tbody>
        {predavaci.map((pre) => (
          <RedakTablicePredavaci
            key={pre.id}
            predavaci={pre}
            // obrisiPredavaca={obrisiPredavaca}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TablicaPredavaci;
