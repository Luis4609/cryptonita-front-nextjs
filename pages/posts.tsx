import { NextPage } from "next";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const API_URL: string = "https://jsonplaceholder.typicode.com/posts#";

export async function getStaticProps() {
  const res = await fetch(API_URL);
  const data: Post[] = await res.json();

  return {
    props: { postsFromApi: data }, // will be passed to the page component as props
  };
}

const Posts: NextPage = ({postsFromApi}) => {
  return (
    <>
      <h1>Posts</h1>
      {postsFromApi.map((post: Post) => (

        <p>{post.title}</p>
      ))}
    </>
  );
};

export default Posts;
