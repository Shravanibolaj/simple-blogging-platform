// src/pages/BlogFormPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function BlogFormPage() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
      const post = storedPosts[id];
      if (post) {
        setTitle(post.title);
        setContent(post.content);
        setAuthor(post.author);
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const newPost = { title, content, author, date: new Date().toLocaleString() };

    if (id) {
      storedPosts[id] = newPost;
    } else {
      storedPosts.push(newPost);
    }

    localStorage.setItem('blogPosts', JSON.stringify(storedPosts));
    navigate('/');
  };

  return (
    <div>
      <h1>{id ? 'Edit' : 'Create'} Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default BlogFormPage;
