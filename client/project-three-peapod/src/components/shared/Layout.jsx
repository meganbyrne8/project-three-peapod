import React from "react";
import Footer from "./Footer";
import Nav from "./navigation/Nav";

function Layout(props) {
  return (
    <div className="layout">
      <Nav />
      <div className="samplediv">
    {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
