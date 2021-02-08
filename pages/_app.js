import { useState } from "react";
import "../styles/globals.css";
import Usuario from "../src/contexts/Usuario";

function MyApp({ Component, pageProps }) {
  const [usuario, setUsuario] = useState({ id: 1, nome: "César" });

  return (
    <Usuario.Provider value={[usuario, setUsuario]}>
      <Component {...pageProps} />
    </Usuario.Provider>
  );
}

export default MyApp;
