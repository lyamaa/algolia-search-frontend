import { Hit as AlgoliaHit } from '@algolia/client-search';

import { Snippet } from './Snippet';

type HitProps = {
  hit: AlgoliaHit<{
    title: string;
    description: string;
    tags_indexing: string[];
  }>;
};

export function Hit({ hit }: HitProps) {
  return (
    <article className="hit">
      <div className="hit-image">
        {/* <img src={hit.image} alt={hit.name} /> */}
      </div>
      <div>
        <h1>
          <Snippet hit={hit} attribute="title" />
        </h1>
        <div>
          By <strong>{hit.title}</strong> in{' '}
          <strong>{hit.tags_indexing[0]}</strong>
        </div>
      </div>
    </article>
  );
}
