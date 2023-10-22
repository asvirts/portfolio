export default async function GetAllBlogPosts() {
  const staticData = await fetch(`http://localhost:1337/api/blog-post`, {
    cache: "force-cache"
  });

  const dynamicData = await fetch(`https://...`, { cache: "no-store" });

  const revalidatedData = await fetch(`https://...`, {
    next: { revalidate: 10 }
  });

  return <div>...</div>;
}
