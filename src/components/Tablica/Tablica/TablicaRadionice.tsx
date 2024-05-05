import RedakTabliceRadionice from "../RedakTablice/RedakTabliceRadionice";

const TablicaRadionice = ({ radionice }) => {
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
            // obrisiRezervacije={obrisiRezervacije}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TablicaRadionice;

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
