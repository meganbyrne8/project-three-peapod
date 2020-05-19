import React from "react";
import Footer from "./Footer";
import Chat from "./Chat"
import Nav from "./navigation/Nav";

function Layout(props) {
  return (
    <div className="layout">
      <Nav />
      <div className="samplediv">
    {props.children}
      </div>
      <Chat />
      <Footer />
    </div>
  );
}

export default Layout;
