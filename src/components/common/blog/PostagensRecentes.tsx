import { getSortedPostsData } from '../../../../lib/posts';
import RecentPosts from '../blog/RecentPosts';

export default function PostagensRecentes() {
  const posts = getSortedPostsData().slice(0, 3); // 👈 pega só os 3 mais recentes

  return (
    <section>
        <div className='container'>
            <div className='row'>
                <h1 className="md:text-2xl font-bold text-brand-300 mb-3 text-center">Postagens Recentes</h1>
                <RecentPosts posts={posts} />
            </div>
        </div>
    </section>
  );
}
