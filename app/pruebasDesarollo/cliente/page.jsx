"use client";

import { useState } from "react";

export default function Cliente() {
  const [caja, setCaja] = useState(0);

  const changeStateBox = () => {
    caja === 1 ? setCaja(0) : setCaja(1);
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum officiis
        ipsam ex ad accusamus ratione rerum. Officia ducimus suscipit rem
        repellendus, eligendi eius? Dolorem velit iusto laboriosam soluta minima
        sit. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Neque reprehenderit nostrum, similique nam illum
        blanditiis consequatur dolorum nulla magnam unde! Repellat explicabo
        eius quod molestiae. Mollitia hic quo atque exercitationem. consectetur
        adipisicing elit. Doloremque velit assumenda, officiis fuga temporibus
        rerum consectetur voluptatem, reprehenderit nobis maxime accusamus. Unde
        repudiandae totam, saepe reprehenderit iusto accusantium dolores dicta!
      </p>

      <h4>Prueba con un Boton</h4>
      <button onClick={changeStateBox}>Generar Respuesta FrontEnd</button>

      <div>
        {caja === 1 ? <h3> Renderizado desde el Front</h3> : <div>{}</div>}
      </div>
    </section>
  );
}
