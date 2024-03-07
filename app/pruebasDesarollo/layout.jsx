import Link from "next/link";

export default function DevsLayout({ children }) {
  return (
    <section>
      <h2>Esquemas en Fase de prueba </h2>
      <h3>📄Temario </h3>

      <ol>
        <li>
          <Link href="/pruebasDesarollo/cliente">Cliente</Link>
        </li>
        <li>
          <Link href="/pruebasDesarollo/progreso">Progreso</Link>
        </li>
        <li>
          <Link href="/pruebasDesarollo/fetchData">Fetch Data</Link>
        </li>
      </ol>

      {children}
    </section>
  );
}
