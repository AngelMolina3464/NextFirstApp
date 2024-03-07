"use client";
export default function PostCard({ title, objetData, selector }) {
  const data = Object(objetData);
  return (
    <div>
      <h2>{title}</h2>

      {data.map((element, index) =>
        element.id == selector ? (
          <>
            <div key={index}>
              <ul >
                <li >
                  <h3>Post con ID: {element.id}</h3>
                </li>
                <li>
                  <h4>Titulo: {element.title}</h4>
                </li>
                <li>
                  <p>Descripcion : {element.body}</p>
                </li>
              </ul>
              <hr />

              <p>
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Alias enim ratione nesciunt.
                Optio ea esse incidunt ipsam deserunt eu Lorem ipsum dolor sit
                amet consectetur Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Alias enim ratione nesciunt. Optio ea esse
                incidunt ipsam deserunt eu Lorem ipsum dolor sit amet
                consectetur Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Alias enim ratione nesciunt. Optio ea esse incidunt ipsam
                deserunt eu Lorem ipsum dolor sit amet consectetur Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Alias enim ratione
                nesciunt. Optio ea esse incidunt ipsam deserunt eum voluptatem,
                hic, eius cum officiis, saepe dolores qui distinctio eos
                voluptas? adipisicing elit. Provident possimus, explicabo, aut
                sint hic, quisquam numquam nobis laborum magni sit nostrum
                voluptas asperiores. Deserunt, a eligendi. Laborum iste unde
                itaque! Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Alias enim ratione
                nesciunt. Optio ea esse incidunt ipsam deserunt eu Lorem ipsum
                dolor sit amet consectetur Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Alias enim ratione nesciunt. Optio
                ea esse incidunt ipsam deserunt eu Lorem ipsum dolor sit amet
                consectetur Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Alias enim ratione nesciunt. Optio ea esse incidunt ipsam
                deserunt eu Lorem ipsum dolor sit amet consectetur Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Alias enim ratione
                nesciunt. Optio ea esse incidunt ipsam deserunt eum voluptatem,
                hic, eius cum officiis, saepe dolores qui distinctio eos
                voluptas? adipisicing elit. Provident possimus, explicabo, aut
                sint hic, quisquam numquam nobis laborum magni sit nostrum
                voluptas asperiores. Deserunt, a eligendi. Laborum iste unde
                itaque!
              </p>
            </div>
          </>
        ) : (
          <div key={index}></div>
        )
      )}
    </div>
  );
}
