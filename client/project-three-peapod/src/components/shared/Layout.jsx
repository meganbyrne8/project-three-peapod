import React from "react";
import Footer from "./Footer";
import Chat from "./Chat"
import Nav from "./navigation/Nav";
import SecondayNav from "./navigation/SecondaryNav"

function Layout(props) {
  return (
    <div className="layout">
      <Nav />
      <SecondayNav/>
      <div className="samplediv">
    {props.children}
      </div>
      <Chat />
      <Footer />
    </div>
  );
}

export default Layout;
