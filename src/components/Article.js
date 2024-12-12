import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteArticle } from './actions';

const Article = ({ article }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUpdate = () => {
    navigate(`/update-article/${article.id}`);
  };

  const handleDelete = () => {
    dispatch(deleteArticle(article.id));
  };

  return (
    <div className="col-md-4 mb-4">
      <div
        className="card h-100 shadow rounded"
        style={{
          transition: 'transform 0.3s cubic-bezier(0.155, 1.105, 0.295, 1.12), box-shadow 0.3s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <img
          src={article.img}
          className="card-img-top p-3"
          alt={article.title}
          style={{ maxHeight: '180px', objectFit: 'contain' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-truncate" style={{ fontWeight: '900', height: '56px' }}>
            {article.title}
          </h5>
          <p className="card-text">{article.body}</p>
          <p className="card-text text-muted">
            <strong>Price:</strong> {article.prix}
          </p>
          <div className="mt-auto">
            <button
              className="btn btn-primary me-2 text-uppercase"
              style={{ fontWeight: '500' }}
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              className="btn btn-danger text-uppercase"
              style={{ fontWeight: '500' }}
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
