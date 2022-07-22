import { Fragment } from "react";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

export default function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
