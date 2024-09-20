import PaginationButtons from "./PaginationButtons";
import Footer from "./Footer";
import { useState } from "react";
const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Groq function to summarize scraped content
async function summarizeText(text) {
    try {
        const completion = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: `${text} Summarize this text in 20 words`,
                },
            ],
            model: "mixtral-8x7b-32768",
        });
        
        const summary = completion.choices[0]?.message?.content || "No response from the API.";
        console.log("Groq API Summary:", summary); // Log response to the console
        return summary;
    } catch (error) {
        console.error("Error occurred while summarizing:", error);
        return "Error occurred while summarizing.";
    }
}

function SearchResults({ results }) {
    const [summary, setSummary] = useState(""); // State to hold the summary result

    // Function to handle the button click
    const handleSummarize = async (link) => {
        console.log(`Scraping content from: ${link}`);
        
        try {
            // Fetch scraped content from the API route
            const response = await fetch('/api/scrape', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: link }),
            });
            
            const data = await response.json();
            if (data.content) {
                const summarizedText = await summarizeText(data.content); // Summarize the scraped content
                setSummary(summarizedText); // Update state with the summary
                console.log("Summary sent to frontend:", summarizedText); // Log the summary to the console
            }
        } catch (error) {
            console.error("Error scraping and summarizing:", error);
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
                                    className="truncate text-xl text-blue-700 group-hover:underline font-OpenSans"
                                >
                                    {result.title}
                                </h2>
                            </a>
                            {/* Button to trigger scraping and summarizing */}
                            <button onClick={() => handleSummarize(result.link)}>
                                Summarize Content
                            </button>
                        </div>
                        <p className="line-clamp-2 text-gray-900 font-OpenSans">
                            {result.snippet}
                        </p>
                    </div>
                ))}

                <PaginationButtons />
            </div>

            {/* Display the summary */}
            {summary && (
                <div className="mx-auto w-full px-3 mt-5">
                    <h3 className="text-lg font-bold">Summarized Text:</h3>
                    <p className="text-gray-700">{summary}</p> {/* Render the summary */}
                </div>
            )}

            <Footer />
        </div>
    );
}

export default SearchResults;