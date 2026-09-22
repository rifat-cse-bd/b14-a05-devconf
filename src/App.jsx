import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Technology from "./components/Technology";

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
    </>
  );
}

export default App;
