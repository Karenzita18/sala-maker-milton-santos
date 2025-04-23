"use client"

import { useState } from 'react';
import ListItem from '../blog/ListItem';

type Props = {
  posts: BlogPost[];
};

export default function Posts({ posts }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYears, setSelectedYears] = useState<number[]>([]);

  const toggleYear = (year: number) => {
    setCurrentPage(1);
    setSelectedYears(prev =>
      prev.includes(year) ? prev.filter(y => y !== year) : [...prev, year]
    );
  };

  const filteredPosts = selectedYears.length === 0
    ? posts
    : posts.filter(post =>
        post.anos?.some((ano: number) => selectedYears.includes(ano))
      );

  const postsPerPage = 4;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="md:py-10 py-0">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Coluna principal com os posts */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentPosts.map(post => (
              <ListItem key={post.id} post={post} />
            ))}
          </div>

          {/* Paginação */}
          <div className="pagination flex justify-center mt-6">
            <button
              disabled={currentPage === 1}
              onClick={() => paginate(currentPage - 1)}
              className="mr-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
            >
              Anterior
            </button>
            <span className="mx-2">{`Página ${currentPage} de ${totalPages}`}</span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => paginate(currentPage + 1)}
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
            >
              Próximo
            </button>
          </div>
        </div>

        {/* Coluna lateral com filtro de anos */}
        <aside className="lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Filtrar por ano</h2>
          <div className="flex flex-col gap-2">
            {Array.from({ length: 9 }, (_, i) => i + 1).map(year => (
              <button
                key={year}
                onClick={() => toggleYear(year)}
                className={`px-3 py-1 rounded text-left ${
                  selectedYears.includes(year)
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {year}º ano
              </button>
            ))}
          </div>
        </aside>

      </div>
    </section>
  );
}
