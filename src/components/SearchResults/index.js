import { useEffect } from "react";
import { useSearchActions } from "@yext/search-headless-react";
import {
  SearchBar,
  StandardCard,
  VerticalResults,
  SpellCheck,
  ResultsCount,
  Pagination,
} from "@yext/search-ui-react";

export default function SearchResults() {
  const searchActions = useSearchActions();

  // On mount, check for query parameters and setup search state.
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("query");

    if (query) {
      searchActions.setQuery(query || "");
      searchActions.executeVerticalQuery();
    }
  }, [searchActions]);

  return (
    <section className="row row-gap-2 mt-3">
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
