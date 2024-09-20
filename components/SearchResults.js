import PaginationButtons from "./PaginationButtons";
import Footer from "./Footer";

function SearchResults({ results }) {
  const handleScrape = async (url) => {
    try {
      // Sending a POST request to the Next.js API route
      const response = await fetch('/api/scrape', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      console.log('Scraped content:', data.content);
    } catch (error) {
      console.error('Error during scraping:', error);
    }
  };

  return (
    <div>
      <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 font-OpenSans">
        <p className="text-gray-500 text-md mb-5 mt-3">
          About {results.searchInformation?.formattedTotalResults} results (
          {results.searchInformation?.formattedSearchTime} seconds)
        </p>

        {results.items?.map((result) => (
          <div key={result.link} className="max-w-xl mb-8 font-sans">
            <div className="group">
              <a
                href={result.link}
                className="text-sml font-OpenSans text-stone-900"
              >
                {result.formattedUrl}
              </a>
              <a href={result.link}>
                <h2
                  className="truncate 
                  text-xl text-blue-700 group-hover:underline font-OpenSans"
                >
                  {result.title}
                </h2>
              </a>
              {/* Button to trigger scraping */}
              <button onClick={() => handleScrape(result.link)}>
                Scrape {result.link}
              </button>
            </div>
            <p className="line-clamp-2 text-gray-900 font-OpenSans">
              {result.snippet}
            </p>
          </div>
        ))}

        <PaginationButtons />
      </div>

      <Footer />
    </div>
  );
}

export default SearchResults;
