'use client'
import {
  SearchBar,
  StandardCard,
  VerticalResults,
  SpellCheck,
  ResultsCount,
  Pagination,
} from "@yext/search-ui-react";

export default function SearchResults() {
  /**
   * The elements to be rendered in the Search page. The Algolia InstantSearch includes
   * both customizable components, as used below, to cover most use cases. They can be customized
   * as needed. It also includes React hooks to access both the search state and API to implement
   * more complex use cases (automatic search triggering, completely custom components.)
   */
  return (
    <section className="row row-gap-2 mt-3">
      {/* Sets up search configuration */}
      <div>
        <SearchBar />
        <SpellCheck />
        <ResultsCount />
        <VerticalResults
          CardComponent={StandardCard}
          displayAllOnNoResults={false}
        />
      </div>
      <Pagination />
    </section>
  )
}
