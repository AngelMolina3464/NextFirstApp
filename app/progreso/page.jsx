const calcular = (horas, minutos) => {
  const horaCurso = 4;
  const minutosCurso = 29;
  const subtotalCurso = horaCurso * 60 + minutosCurso;
  const proporcion =  (((horas * 60 + minutos) / subtotalCurso) * 100).toFixed(2);
  return proporcion;
};

export default function Progreso() {
  return (
    <div>
      <h2>% de Proceso Actual </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        similique ut optio blanditiis saepe. Voluptate, unde assumenda. Ullam
        tempore laboriosam laborum labore fugit doloribus dicta repellat, sed
        quod, molestiae harum.
      </p>
      <h3> 😀 %{calcular(0, 50)} Avanzado </h3>
    </div>
  );
}
