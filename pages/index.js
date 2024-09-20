import Head from "next/head";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center h-screen ">
      <Head>
        <title>Google</title>
        <meta
          name="GoogleSearch"
          content="A functional replica of Google's search page, you can use it for searches. Styled with Tailwind CSS to Rapidly build and look as close as possible to current google search page, the search results are pulled using Googles Programmable Search Engine and it was build using Next.js the react framework."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}

      <header className="flex w-full p-5 justify-between text-sm text-gray-800">
        {/*left section*/}
        <div className="flex space-x-4 items-center font-Ubuntu">
          
        </div>

        {/*right section*/}
        <div className="flex space-x-4 font-Ubuntu items-center">
         
          <a href="https://myaccount.google.com/?utm_source=OGB&tab=wk&utm_medium=act&pli=1">
            <Avatar url="https://i.pinimg.com/564x/de/6b/29/de6b295da4ff46c17e31688c5b274f8a.jpg" />
          </a>
        </div>
      </header>

      {/*body*/}
      <form className="flex flex-col items-center pt-3 flex-grow w-4/5">
      <Image
  src="https://www.godrej.com/image/logo.png"
  height={100}
  width={200}
  priority
/>
        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full
      border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-700" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 font-Ubuntu">
          
        </div>

        <div className="flex link justify-center text-sm mt-7 pr-1 text-blue-700 items-center md:col-span-2 lg:col-span-1 lg:col-start-2 font-Ubuntu">
          {" "}
          <a href="https://www.godrej.com/">
            {" "}
            Visit the Godrej site and explore our products.{" "}
          </a>
        </div>
      </form>

      <Footer />
    </div>
  );
}
