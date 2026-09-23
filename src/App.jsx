import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Technology from "./components/Technology";
import Footer from "./components/Footer";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <header className="w-11/12 mx-auto sticky top-0 z-10">
        <NavBar></NavBar>
      </header>
      <main className="w-11/12 mx-auto">
        <Banner></Banner>
        <Technology></Technology>
      </main>
      <section className="w-11/12 mx-auto border-t border-slate-100 mt-6">
        <Footer></Footer>
      </section>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
