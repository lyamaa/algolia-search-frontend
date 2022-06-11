export const INSTANT_SEARCH_INDEX_NAME = 'articles';
export const INSTANT_SEARCH_QUERY_SUGGESTIONS =
  'articles_query_suggestions';
export const INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES = [
  'category_indexing',

];

export const APP_ID = import.meta.env.VITE_ALGOLIA_APP_ID || '';
export const API_KEY = import.meta.env.VITE_ALGOLIA_API_KEY || '';