import RedakTablicePredavaci from "../RedakTablice/RedakTablicePredavaci";

const TablicaPredavaci = ({ predavaci }) => {
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
            // obrisiRezervacije={obrisiRezervacije}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TablicaPredavaci;

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
