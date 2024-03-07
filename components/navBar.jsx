import Link from "next/link";

export default function NavBar({ title }) {
  return (
    <nav>
      <h2>{title}</h2>
      <ul>
        <li>
          <Link href="/">Menu</Link>
        </li>
        <li>
          <Link href="/rubros">Rubros</Link>
        </li>
        <li>
          <Link href="/contacto">Contacto</Link>
        </li>
        <li>
          <Link href="/progreso">Progreso</Link>
        </li>
        <li>
          <Link href="/pruebasDesarollo">Devs</Link>
        </li>
      </ul>
    </nav>
  );
}
