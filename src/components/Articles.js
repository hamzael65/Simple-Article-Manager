import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchArticles } from './actions';
import Article from './Article';
import { useNavigate } from 'react-router-dom'; 
const Articles = () => {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const goToAddArticle = () => {
    navigate('/add-article'); 
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-primary mb-3" onClick={goToAddArticle}>
        Add New Article
      </button>
      <div className="row">
        {articles.length > 0 ? (
          articles.map((article) => (
            <Article key={article.id} article={article} />
          ))
        ) : (
          <div>No articles found</div>
        )}
      </div>
    </div>
  );
};

export default Articles;
