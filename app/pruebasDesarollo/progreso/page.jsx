"use client";

import { useState } from "react";

export default function ProgresoCliente() {
  const horaCurso = 4;
  const minutosCurso = 29;
  const [minutos, setminutos] = useState(0);
  const [horas, sethoras] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

  const takeValueInputMinutos = (event) => {
    setminutos(event.target.value);
  };

  const takeValueInputHoras = (event) => {
    sethoras(event.target.value);
  };

  const calcularOnClick = () => {
    const porcent =
      (Number(horas * 60 + +minutos) / Number(horaCurso * 60 + minutosCurso)) *
      100;

    setPorcentaje(porcent);
  };

  return (
    <section>
      <h2>Pruebas que se hacen con el Cliente y No con el Servidor </h2>
      <h4>Unicamente React</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        nulla quo. Necessitatibus quas sed laudantium esse adipisci perspiciatis
        commodi neque expedita eligendi omnis. Vitae ea quam molestias sit,
        molestiae voluptates?
      </p>

      <article>
        <label htmlFor="">Horas</label>
        <br />
        <input type="number" onChange={takeValueInputHoras} />
        <br />
        <label htmlFor="">Minutos</label>
        <br />
        <input type="number" onChange={takeValueInputMinutos} />
        <br />
        <br />
        <button onClick={calcularOnClick}>Calcular</button>
      </article>

      <article>
        <p>{horas}</p>
        <p>{minutos}</p>
        <h4>%{porcentaje.toFixed(2)} Avanzado en NextJs</h4>
      </article>
    </section>
  );
}
