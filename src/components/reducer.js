const initialState = {
  articles: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ARTICLES':
      return { ...state, articles: action.payload };

    case 'ADD_ARTICLE':
      return { ...state, articles: [...state.articles, action.payload] };

    case 'DELETE_ARTICLE':
      return {
        ...state,
        articles: state.articles.filter((article) => article.id !== action.payload),
      };

    case 'UPDATE_ARTICLE':
      return {
        ...state,
        articles: state.articles.map((article) =>
          article.id === action.payload.id ? { ...article, ...action.payload } : article
        ),
      };

    default:
      return state;
  }
};

export default reducer;
