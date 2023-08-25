import {
  SearchHeadlessProvider,
  provideHeadless,
  Environment,
} from "@yext/search-headless-react";

export default function App({ children }) {
  /**
   * Setup the Yext Search Provider. All Yext components
   * should be inside it.
   */
  const headlessConfig = {
    apiKey: "a5776b9afa3bf3a2616a689aed0a987b",
    experienceKey: "turtlehead",
    locale: "en",
    verticalKey: "restaurants",
    environment: Environment.SANDBOX,
  };

  const searcher = provideHeadless(headlessConfig);

  return (
    <SearchHeadlessProvider searcher={searcher}>
      {children}
    </SearchHeadlessProvider>
  );
}
