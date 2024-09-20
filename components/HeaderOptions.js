import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { useRef } from "react";
import { useRouter } from "next/router";

function HeaderOptions() {
  return (
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 boarer-b font-OpenSans">
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
      </div>

      <div className="flex space-x-4">
        <a href="https://www.google.com/preferences?hl=en-IN&fg=1">
          <p className="link">Settings</p>
        </a>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
