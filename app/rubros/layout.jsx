import Link from "next/link";

export const metadata = {
  title: "Rubros del Sistema",
};

export default function RubrosLayout({ children }) {
  return (
    <>
      <h1>Rubros</h1>
      <nav>
        <ul>
          <li>
            <Link href="/rubros/equipos">Ordenadores</Link>
          </li>
          <li>
            <Link href="/rubros/asignaciones">Asignaciones </Link>
          </li>

          <li>
            <Link href="/rubros/capitalHumano">RR.HH</Link>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
