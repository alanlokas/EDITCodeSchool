import React from "react";
import "./NotFound.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";

export default function NotFound() {
  return (
    <div>
      <Nav />
      <Menu />
      <div className="content">
        <div>
          <b>404</b>Page Not Found
        </div>
      </div>

      <Footer />
    </div>
  );
}
