


import PostagensRecentes from "@/components/common/blog/PostagensRecentes";
import FeedHistoria from "@/components/common/Feed/FeedHistoria";
import FeedSobreNos from "@/components/common/Feed/FeedSobreNos";
import HeroHome from "@/components/common/Hero/Home";

export default function Home() {
  return (
    <main>    
      <HeroHome />
      <FeedHistoria />
      <FeedSobreNos />
      <PostagensRecentes />
    </main>
  );
}
