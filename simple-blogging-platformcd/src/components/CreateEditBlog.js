import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CreateEditBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
      const blog = storedBlogs[id];
      if (blog) {
        setTitle(blog.title);
        setContent(blog.content);
        setAuthor(blog.author);
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    const newBlog = { title, content, author, date: new Date().toLocaleDateString() };

    if (id) {
      storedBlogs[id] = newBlog;
    } else {
      storedBlogs.push(newBlog);
    }

    localStorage.setItem('blogs', JSON.stringify(storedBlogs));
    navigate('/');
  };

  return (
    <div>
      <h1>{id ? 'Edit' : 'Create'} Blog Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Content</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
        </div>
        <div>
          <label>Author</label>
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateEditBlog;
