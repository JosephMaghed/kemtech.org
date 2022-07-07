import { Fragment } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
