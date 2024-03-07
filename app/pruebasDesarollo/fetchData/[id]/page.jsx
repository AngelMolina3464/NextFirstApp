import PostCard from "@/components/postCard.jsx";

const loadPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

export default async function PageforId({ params }) {
  const Selector = params.id 

  return (
    <>
      <h3>ID: {Selector}</h3>
      <section>
        <PostCard objetData={await loadPost()} title={"Info de Posteo"}   selector={Selector} />
      </section>
    </>
  );
}
