// src/pages/BlogDetailPage.js
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function BlogDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    setPost(storedPosts[id]);
  }, [id]);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
      storedPosts.splice(id, 1);
      localStorage.setItem('blogPosts', JSON.stringify(storedPosts));
      navigate('/');
    }
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.author}</p>
      <p>{post.date}</p>
      <p>{post.content}</p>
      <button onClick={handleDelete}>Delete Post</button>
      <Link to={`/edit/${id}`}>Edit Post</Link>
    </div>
  );
}

export default BlogDetailPage;
