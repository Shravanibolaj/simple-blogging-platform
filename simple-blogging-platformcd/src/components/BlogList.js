import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const POSTS_PER_PAGE = 5;

function BlogList({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div>
      <ul>
        {paginatedPosts.map((post, index) => (
          <li key={index}>
            <Link to={`/blog/${index}`}>
              <h2>{post.title}</h2>
              <p>{post.content.substring(0, 100)}...</p>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => handleChangePage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
