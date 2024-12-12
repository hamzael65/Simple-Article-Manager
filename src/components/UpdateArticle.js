import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchArticles, updateArticleAction } from "./actions"; 

const UpdateArticle = () => {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const articles = useSelector((state) => state.articles); 
  const [article, setArticle] = useState({ title: "", body: "", img: "", prix: "" });

  useEffect(() => {
    if (articles.length === 0) {
      dispatch(fetchArticles());
    }
  }, [articles.length, dispatch]);
  
  useEffect(() => {
    const articleToUpdate = articles.find((article) => article.id === id); 
    if (articleToUpdate) {
      setArticle(articleToUpdate);
    }
  }, [articles, id]);
  

  const handleArticleData = (e) => {

    setArticle({
      ...article,
      [e.target.id]: e.target.value,
    });
  };

  const handleUpdateArticle = (e) => {
    e.preventDefault();
    dispatch(updateArticleAction(article.id, article)); 
    navigate("/"); 
  };

  if (!article || !article.id) {
   
    return <div>Article not found.</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Update Article</h2>
      <form onSubmit={handleUpdateArticle}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={article.title}
            onChange={handleArticleData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body
          </label>
          <textarea
            id="body"
            className="form-control"
            value={article.body}
            onChange={handleArticleData}
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            id="img"
            className="form-control"
            value={article.img}
            onChange={handleArticleData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prix" className="form-label">
            Price
          </label>
          <input
            type="text"
            id="prix"
            className="form-control"
            value={article.prix}
            onChange={handleArticleData}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Article
        </button>
      </form>
    </div>
  );
};

export default UpdateArticle;
