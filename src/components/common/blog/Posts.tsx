"use client";

import { useState } from 'react';
import ListItem from '../blog/ListItem';

type Props = {
  posts: BlogPost[]; // Defina o tipo da prop
}

export default function Posts({ posts }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section>
      <div className="row">
        <div className="container">
          <div className="md:-mt-16 -mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentPosts.map((post) => (
                    <ListItem key={post.id} post={post} />
                ))}
            </div>

            <div className="pagination flex justify-center mt-4">
                <button
                disabled={currentPage === 1}
                onClick={() => paginate(currentPage - 1)}
                className="mr-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                Anterior
                </button>
                <span>{`Página ${currentPage} de ${totalPages}`}</span>
                <button
                disabled={currentPage === totalPages}
                onClick={() => paginate(currentPage + 1)}
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                Próximo
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
