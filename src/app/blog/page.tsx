import Posts from "@/components/common/blog/Posts";
import Breadcrumb from "@/components/common/Hero/Breadcrumb";
import { getSortedPostsData } from "../../../lib/posts"; // Importe sua nova função

export default async function Home() {
  const posts = await getSortedPostsData(); // Chame a função no lado do servidor

  return (
    <main>
      <Breadcrumb
        title="Blog"
        desc="Lorem"
      />
      <Posts posts={posts} /> {/* Passe os posts como prop */}
    </main>
  );
}
