import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Technology from "./components/Technology";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header className="w-11/12 mx-auto">
        <NavBar></NavBar>
      </header>
      <main className="w-11/12 mx-auto">
        <Banner></Banner>
        <Technology></Technology>
      </main>
      <section className="w-11/12 mx-auto border-t border-slate-100">
        <Footer></Footer>
      </section>
    </>
  );
}

export default App;
