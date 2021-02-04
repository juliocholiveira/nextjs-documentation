import Link from "next/link";
import { useContext } from "react";
import Usuario from "../src/contexts/Usuario";

export default function About() {
  const usuario = useContext(Usuario);

  return (
    <>
      <h1>About {usuario.nome}</h1>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </>
  );
}
