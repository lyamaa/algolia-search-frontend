export const INSTANT_SEARCH_INDEX_NAME = 'articles';
export const INSTANT_SEARCH_QUERY_SUGGESTIONS =
  'articles_query_suggestions';
export const INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES = [
  'tags_indexing',
  'tags_indexing',
];

export const APP_ID = import.meta.env.ALGOLIA_APP_ID || '';
export const API_KEY = import.meta.env.ALGOLIA_API_KEY || '';