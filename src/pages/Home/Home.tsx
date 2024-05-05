import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";
// import Sidebar from "../../components/Sidebar/Sidebar";
import Uvod from "../../components/Uvod/Uvod";

export default function Home() {
  return (
    <div className="wrapper">
      <header>
        <Nav />
      </header>
      <Menu natpis={"tipka"} />
      <main className="content">
        <section>
          <Uvod />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
