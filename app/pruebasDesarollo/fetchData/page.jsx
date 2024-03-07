const loadPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export default async function fetchData() {
  const carga = await loadPost();
  console.log(carga);

  return (
    <div>
      <h2>FetchData </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        similique ut optio blanditiis saepe. Voluptate, unde assumenda. Ullam
        tempore laboriosam laborum labore fugit doloribus dicta repellat, sed
        quod, molestiae harum.
      </p>

      {carga.map((element, index) => (
        <>
          <div key={index}>
            <h4>{element.id}</h4>
            <h5>{element.title}</h5>
            <p>{element.body}</p>
            <a href={`/pruebasDesarollo/fetchData/${element.id}`}>
              {" "}
              Ir al Post{" "}
            </a>
          </div>
        </>
      ))}
    </div>
  );
}
