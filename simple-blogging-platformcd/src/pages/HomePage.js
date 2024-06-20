// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlogList from '../components/BlogList';

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <BlogList posts={posts} />
      <Link to="/new">Create New Post</Link>
    </div>
  );
}

export default HomePage;
