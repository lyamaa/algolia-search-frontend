export const INSTANT_SEARCH_INDEX_NAME = 'articles';
export const INSTANT_SEARCH_QUERY_SUGGESTIONS =
  'articles_query_suggestions';
export const INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES = [
  'tags_indexing',
  'tags_indexing',
];

export const APP_ID = process.env.ALGOLIA_APP_ID || '';
export const API_KEY = process.env.ALGOLIA_API_KEY || '';