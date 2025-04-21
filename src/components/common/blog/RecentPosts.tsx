'use client';

import Image from 'next/image';
import Link from 'next/link';

type Post = {
  id: string;
  title: string;
  date: string;
  desc: string;
  image: string;
};

type Props = {
  posts: Post[];
};

export default function RecentPosts({ posts }: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white border-2 border-brand-200/50 rounded-xl shadow p-4">
          <div className="relative w-full h-48">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h2 className="text-xl font-bold mt-4 text-brand-300">{post.title}</h2>
          <p className="text-gray-600 mt-2">{post.desc}</p>
          <Link href={`/blog/${post.id}`} className="text-brand-100 mt-4 inline-block">
            Ler mais →
          </Link>
        </div>
      ))}
    </div>
  );
}
