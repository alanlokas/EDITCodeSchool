import RedakTabliceOrganizacije from "../RedakTablice/RedakTabliceOrganizacije";

interface Organizacija {
  id: string;
  ime: string;
  // Dodaj ostale potrebne propertije za organizaciju
}

interface Props {
  organizacije: Organizacija[];
}

function TablicaOrganizacije(props: Props) {
  const { organizacije } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Ime</th>
        </tr>
      </thead>
      <tbody>
        {organizacije.map((org) => (
          <RedakTabliceOrganizacije
            key={org.id}
            organizacije={org}
            // obrisiOrganizacije={obrisiOrganizacije}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TablicaOrganizacije;
