export default async function GetAllBlogPosts() {
  const res = await fetch("https://p1m9pexs.api.sanity.io/");
  const data = await res.json();
  return <p>{data.message}</p>;
}
