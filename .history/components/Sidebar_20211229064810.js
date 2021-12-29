import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div>
      <button className="flex items-center space-x-2 hover:tex-white">
        <HomeIcon className="h-5 w-5" />
        <p>Home</p>
      </button>
      <button className="flex items-center space-x-2 hover:tex-white">
        <SearchIcon className="h-5 w-5" />
        <p>Search</p>
      </button>
      <button className="flex items-center space-x-2 hover:tex-white">
        <LibraryIcon className="h-5 w-5" />
        <p>Your Library</p>
      </button>
    </div>
  );
}

export default Sidebar;
