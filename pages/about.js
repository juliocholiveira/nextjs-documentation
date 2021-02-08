import Link from "next/link";
import { useContext } from "react";
import Usuario from "../src/contexts/Usuario";

export default function About() {
  const [usuario, setUsuario] = useContext(Usuario);

  return (
    <>
      <h1>About {usuario.nome}</h1>
      <button onClick={() => setUsuario({ id: 5, nome: "Júlio César" })}>
        teste {usuario.nome}
      </button>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </>
  );
}
