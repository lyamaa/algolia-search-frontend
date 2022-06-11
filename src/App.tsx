import algoliasearch from 'algoliasearch/lite';
import { Configure, InstantSearch } from 'react-instantsearch-hooks';

import { Autocomplete, Hit } from './components';
import {
  API_KEY,
  APP_ID,
  INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES,
  INSTANT_SEARCH_INDEX_NAME,
} from './constants';
import { HierarchicalMenu, Hits, Pagination, Panel } from './widgets';

import './App.css';

function App() {
  const searchClient = algoliasearch(
  APP_ID,
  API_KEY,
  );

  console.log("APP_ID", APP_ID);
  console.log("API_KEY", API_KEY);

  return (
    <div>
      <InstantSearch
        searchClient={searchClient}
        indexName={INSTANT_SEARCH_INDEX_NAME}
        routing
      >
        <header className="header">
          <div className="header-wrapper wrapper">
            <nav className="header-nav">
              <a href="/">Home</a>
            </nav>
            <Autocomplete
              searchClient={searchClient}
              placeholder="Search products"
              detachedMediaQuery="none"
              openOnFocus
            />
          </div>
        </header>

        <Configure
          attributesToSnippet={['title:7', 'description:15']}
          snippetEllipsisText="…"
        />
        <div className="container wrapper">
          <div>
            <Panel header="Categories">
              <HierarchicalMenu
                attributes={INSTANT_SEARCH_HIERARCHICAL_ATTRIBUTES}
              />
            </Panel>
          </div>
          <div>
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
}

export default App;
