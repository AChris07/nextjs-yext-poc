import qs from 'qs';
import { useSearchActions } from "@yext/search-headless-react";
import { SearchBar } from "@yext/search-ui-react";

export default function Autocomplete({ searchUrl, placeholder }) {
  // Setup onSearch callback to redirect to URL with query parameters.
  const handleSearch = (searchEventData) => {
    const { query } = searchEventData;
    
    if (!searchUrl || !query?.length) return;

    const queryParams = qs.stringify({ query }, { addQueryPrefix: true });

    window.location.href = `${searchUrl}${queryParams}`;
  };

  return (
    <SearchBar onSearch={handleSearch} />
  ) 
}
