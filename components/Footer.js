function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-400 bg-gray-100 text-gray-500 font-OpenSans">
      

      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex link justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 font-Ubuntu">
          <img src="github-brands.png" className="h-5  px-1 "></img>{" "}
          <a href="https://github.com/Znaxh/Godrej-Search">
            {" "}
            Github.com/Godrej-Search{" "}
          </a>
        </div>

        <div className="flex justify-center text-sm space-x-5 whitespace-nowrap md:justify-self-start">
          
        </div>
        <div className="flex justify-center text-sm space-x-5 md:ml-auto">
        </div>
      </div>
    </footer>
  );
}

export default Footer;
