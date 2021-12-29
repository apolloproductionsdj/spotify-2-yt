import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div>
      <button>
        <HomeIcon className="h-5 w-5" />
        <p>Home</p>
      </button>
    </div>
  );
}

export default Sidebar;
