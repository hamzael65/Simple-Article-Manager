
export const fetchArticles = () => async (dispatch) => {
  const response = await fetch('http://localhost:3000/articles');
  const data = await response.json();
  dispatch({ type: 'SET_ARTICLES', payload: data });
};

export const updateArticleAction = (id, updatedArticle) => async (dispatch) => {
  await fetch(`http://localhost:3000/articles/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedArticle),
  });
  dispatch({ type: 'UPDATE_ARTICLE', payload: updatedArticle });
};


export const addArticle = (article) => async (dispatch, getState) => {
 
  const currentArticles = getState().articles;
  const newId = currentArticles.length > 0
    ? Math.max(...currentArticles.map((a) => parseInt(a.id))) + 1
    : 1;

  
  const articleWithId = { ...article, id: newId.toString() };

  const response = await fetch('http://localhost:3000/articles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(articleWithId),
  });

  const newArticle = await response.json();

  dispatch({ type: 'ADD_ARTICLE', payload: newArticle });
};


export const deleteArticle = (id) => async (dispatch) => {
  await fetch(`http://localhost:3000/articles/${id}`, { method: 'DELETE' });
  dispatch({ type: 'DELETE_ARTICLE', payload: id });
};
