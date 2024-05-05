import RedakTabliceOrganizacije from "../RedakTablice/RedakTabliceOrganizacije";

const TablicaOrganizacije = ({ organizacije }) => {
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
            // obrisiRezervacije={obrisiRezervacije}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TablicaOrganizacije;

// import RedakTablice from "./RedakTablice";

// type Rezervacija = {
//   id: number;
//   ime: string;
//   prezime: string;
//   polaziste: string;
//   odrediste: string;
//   klasa: string;
// };

// type TablicaProps = {
//   rezervacije: Rezervacija[];
// };

// const Tablica = ({ rezervacije }: TablicaProps) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Ime</th>
//           <th>Prezime</th>
//           <th>Polazište</th>
//           <th>Odredište</th>
//           <th>Klasa</th>
//         </tr>
//       </thead>
//       <tbody>
//         {rezervacije.map((r) => (
//           <RedakTablice key={r.id} rez={r} />
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Tablica;
