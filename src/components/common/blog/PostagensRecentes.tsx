import { getSortedPostsData } from '../../../../lib/posts';
import RecentPosts from '../blog/RecentPosts';
import Link from 'next/link';

export default function PostagensRecentes() {
  const posts = getSortedPostsData().slice(0, 3); // 👈 pega só os 3 mais recentes

  return (
    <section>
        <div className='container'>
            <div className='row'>
                <h1 className="md:text-2xl text-4xl font-bold text-brand-300 mb-5 text-center">
                    Blog
                </h1>
                <RecentPosts posts={posts} />
                <div className="flex justify-center md:mt-5 mt-6">
                    <Link
                        href="/blog"
                        className="px-6 py-4 bg-brand-300 text-white font-bold rounded-lg hover:bg-brand-500 transition duration-300"
                    >
                        Conheça Nossa Equipe
                    </Link>
                </div>

            </div>
        </div>
    </section>
  );
}
