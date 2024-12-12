import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addArticle } from './actions'; 
const AddArticle = () => {
  const [article, setArticle] = useState({ title: '', body: '', img: '', prix: '' });
  const dispatch = useDispatch();

  const handleArticleData = (e) => {
    setArticle({
      ...article,
      [e.target.id]: e.target.value,
    });
  };

  const addNewArticle = async (e) => {
    e.preventDefault();
    
    await dispatch(addArticle(article)); 
    setArticle({ title: '', body: '', img: '', prix: '' });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add a New Article</h2>
      <form onSubmit={addNewArticle} className="add-article">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            placeholder="Enter the title"
            value={article.title}
            onChange={handleArticleData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Body</label>
          <textarea
            id="body"
            className="form-control"
            placeholder="Enter the article body"
            value={article.body}
            onChange={handleArticleData}
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">Image URL</label>
          <input
            type="text"
            id="img"
            className="form-control"
            placeholder="Enter the image URL"
            value={article.img}
            onChange={handleArticleData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prix" className="form-label">Price</label>
          <input
            type="text"
            id="prix"
            className="form-control"
            placeholder="Enter the price"
            value={article.prix}
            onChange={handleArticleData}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Article</button>
      </form>
    </div>
  );
};

export default AddArticle;
